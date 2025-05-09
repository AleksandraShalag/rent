import { Offer } from "../models/offer.js";
async function getAllOffers(req,res,next){
    try {
        const offers = await Offer.findAll();
        res.json(offers);
      } catch (err) {
        res.status(500).json({ error: 'Не удалось получить предложения' });
      }
}
export {getAllOffers};
