import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Placements } from "./placements";
import { Toppers } from "./toppers";
import { Posts } from "./posts";
import { Announcements } from "./announcement";
import { Feedbacks, InitialFeedback } from "./feedback";
import { InitialPrayaana, Prayaanas } from "./prayaana";
import { Pizadas } from "./pizada";
import { Auth } from "./auth";

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            placements: Placements,
            toppers: Toppers,
            posts: Posts,
            announcements: Announcements,
            feedbacks: Feedbacks,
            prayaanas: Prayaanas,
            pizadas: Pizadas,
            auth: Auth,
            ...createForms({
                feedback: InitialFeedback,
                prayaana: InitialPrayaana
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store
}