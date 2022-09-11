import * as React from 'react';
import { useState } from 'react';
import { CardElement, useStripe, useElements,  } from '@stripe/react-stripe-js';

const Donate: React.FC<DonateProps> = (props) =>{
    
    const [name, setName] = useState('')
    const[amount, setAmount] = React.useState('');
   
    const stripe = useStripe();
    const elements =useElements();
    
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        
        if(!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement!,  
            billing_details:{
                name
            }
        });
        if (error) {
            
            console.log('[error] ', error);
        } else {
            console.log('paymentMethod', paymentMethod);

            const res = await fetch('/donate',{
                method: 'POST',
                headers: {'Content-type': 'application/json',
            'Accept': 'applications/json'
            },
                
                body: JSON.stringify({amount, paymentMethod: paymentMethod})
            });

            const paymentComplete = await res.json();

            console.log(paymentComplete);
            alert('Thank you!')

        }
    }
    
    
    
    
    return(
        <main className="container">
            <section className="row mt-5 justify-content-center">
                <div className="col-md-6">
                    <form action="" className="form-group p-3 border rounded-lg">
                      <input className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                      <input className="form-control" value={amount} onChange={e => setAmount(e.target.value)}/> 
                      <CardElement className='form-control' /> 
                      <button onClick={handleSubmit}  className="btn btn-primary">Donate!</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

interface DonateProps {}

export default Donate;