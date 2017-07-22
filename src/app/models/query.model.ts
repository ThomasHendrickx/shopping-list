import { FirebaseListFactoryOpts } from "angularfire2/interfaces";

export interface Query extends FirebaseListFactoryOpts {

    orderByChild: string;
    limitToLast: number;
    
}