
// import { Router } from 'express';
// import Stripe  from 'stripe';
// import config from '../config';

// const stripe = new Stripe(config.stripe.secret!, {apiVersion:'2022-08-01' })

// const router = Router();


// router.post('/', async (req, res) => {
//     try {
       
//         const fulfilled =  await stripe.paymentIntents.create({
//             currency: 'usd', 
//             amount: req.body.amount * 100,
//             confirm: true,
//             payment_method: req.body.paymentMethod.id
//         });
//         res.json(fulfilled)
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg: 'yet anoter screw up'})
//     }
// });
// export default router; 