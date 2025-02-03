import { StyleSheet,Dimensions} from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

const {height} = Dimensions.get('window')

const styles = StyleSheet.create({
 headerMain:{
    height: height * 0.064,
    backgroundColor:'#F7D102',
 },
 headerOne:{
    height: height * 0.064,
    width:'80%',
    backgroundColor:'white',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:'3%',
    borderTopRightRadius:25,
    borderBottomRightRadius:25,
 },
 image:{
    width:20,
    height:20,
    
    
 },
 headerOneView:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:8,
    paddingLeft:8,
    borderLeftColor:'#F3F2FD',
    borderLeftWidth:2,
 },
 headerTwo:{
    width:'30%',
    height: height * 0.064,
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    paddingLeft:10,
 }
 


})
export default styles;