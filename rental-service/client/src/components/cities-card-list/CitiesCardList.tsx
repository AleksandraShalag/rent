import { OfferList } from "../../types/offer";
import { CitiesCard } from "../cities-card/cities-card";
type CitiesCardProps = {
    offerList: OfferList[];
};
function CitiesCardList({offerList}:CitiesCardProps){
    return(
        <div className="cities__places-list places__list tabs__content">
            {Array.from(offerList, (item)=>
            <CitiesCard key ={ item.id} id={item.id} title={item.title} type={item.type} price={item.price} previewImage={ item.previewImage} isPremium={item.isPremium} rating={item.rating}/>)}

        </div>
    );
}
export {CitiesCardList};
