import React, {Component} from "react";
import IPAddress from "./IPAddress";

var xhr;

class IPAddressContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ip_address: "...",
        };

        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount() {
        xhr = new XMLHttpRequest();

        xhr.open("GET", "https://ipinfo.io/json?token=2277ce4bac0347", true);
        /* The original example with just 'ipinfo.io/json' did not work. Got a 429 server error (too many requests). 
        Explanation from aislyn666@forum.kirupa.com: 
        "I am having the same problem, but just from localhost. I happen to have tried this in a virtual machine and checked 
        from the host system as well using the IP my VM has in the shared network, and with that the code works. 
        My guess is that somehow the sender of the request to ipinfo.io gets to be “localhost” if you use 
        the app as probably most people do when just trying out, and “localhost” most probably has way more than 1000 
        requests/month to them (see https://ipinfo.io/pricing) and therefore we get blocked.""       
        
        So what we use here is Kirupa's ipinfo user token. It'll also cease to work if it is used more than 1000 times 
        per month.
        */
        xhr.send();
        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            this.setState(
                {
                    ip_address: response.ip,
                }
            );
        } else {
            console.log("This did not work.");
        }
    }

    render() {
        return(
            <IPAddress ip={this.state.ip_address} />
        );
    }
}

export default IPAddressContainer;