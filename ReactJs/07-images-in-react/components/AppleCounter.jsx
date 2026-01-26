
import Button from "./Button"
import Applebasket from "./Applebasket"
import './AppleCounter.css'
const LeftArrow = new URL('../assets/images/left-arrow.png', import.meta.url)
const RightArrow = new URL('../assets/images/right-arrow.png', import.meta.url)



const AppleCounter = () =>{
    return <section>
        <Applebasket appleCount={10} backetName = 'Basket 1'/>
        <Button imageUrl = {LeftArrow} titleText={'Left Arrow' } altText={'Left Arrow'} />
        <Button imageUrl = {RightArrow} titleText={'Right Arrow'} altText={'Right Arrow'} />
        <Applebasket appleCount={0} backetName = 'Basket 2'/>
    </section>
}
export default AppleCounter