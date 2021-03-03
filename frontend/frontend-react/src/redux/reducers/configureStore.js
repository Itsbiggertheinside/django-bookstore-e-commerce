import { CreateStore } from 'redux';
import reducers from './index';


export default function configureStore(){
    return CreateStore(reducers)
}