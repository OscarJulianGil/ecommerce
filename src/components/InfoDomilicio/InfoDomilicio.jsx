import { Component } from "react";


export class InfoDomilicio extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("componentDidMount")
    }


    componentWillUnmount(){
        console.log("componentWillUnmount")
    }


    render(){
        return(
            <div className="container">
                <div className="row">
                    <h1>Checkout</h1>
                    <h6>Por favor indiquenos a donde enviaremos su compra.</h6>
                </div>
                <div className="row">
                    <div className="col-12">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}