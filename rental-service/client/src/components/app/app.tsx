import { MainPage } from "../../pages/main-page/main-page";
import { OfferPage } from "../../pages/offer-page";
import { FavoritesPage } from "../../pages/favorites-page";
import { NotFoundPage } from "../../pages/not-found-page";
import { OfferNotLoggedPage } from "../../pages/offer-not-logged-page";
import { FavoritesEmptyPage } from "../../pages/favorites-empty-page";
import { MainEmptyPage } from "../../pages/main-empty-page";
import { LoginPage } from "../../pages/login-page";

function App(){
    return(
        <NotFoundPage />
    );
}
export {App};