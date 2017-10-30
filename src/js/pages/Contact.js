import React from 'react'
//import fourthJuly from 'svg-react-loader?name=Icon!../../assets/fourth-july.svg';
import IconRemove from '../../assets/fourth-july.svg'
import GFNFoot from '../../assets/GFN-foot.svg'
import { Tweenlite, TimelineMax } from 'gsap'
import ChangingProgressbar from '../components/ChangingProgressbar'


export default class Contact extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }

	componentDidMount(){
		document.getElementById('center').className += 'animated bounceOutUp'

	    let currentIndex = 3

		const layer1 = document.getElementById('layer1'),
			  layer2 = document.getElementById('layer2'),
			  layer3 = document.getElementById('layer3'),
			  layer4 = document.getElementById('layer4'),
			  layer5 = document.getElementById('layer5'),
			  layer6 = document.getElementById('layer6'),
			  GFNFoot = document.getElementById('foot'),
			  preloader = document.getElementById('preloader');



		const L = document.getElementById('l'),
		      I = document.getElementById('i'),
		      TT = document.getElementById('tt'),
		      secondL = document.getElementById('secondl'),
		      E = document.getElementById('e');

		let littleTimeLine = new TimelineMax()
									.from(L, 0.6, { x: -100, autoAlpha: 0 , ease: Power1.easeIn}, '-=0.15')
									.from(I, 0.6, { x: -100, autoAlpha: 0 , ease: Power1.easeIn}, '-=0.15')
									.from(TT, 0.6, { x: -100, autoAlpha: 0 , ease: Power1.easeIn}, '-=0.15')
									.from(secondl, 0.6, { x: -100, autoAlpha: 0 , ease: Power1.easeIn}, '-=0.15')
									.from(E, 0.6, { x: -100, autoAlpha: 0 , ease: Power1.easeIn}, '-=0.15')
		
		let GFNtimeLine = new TimelineMax()
									.from(layer1, 0.5, {  autoAlpha: 0 , ease: SteppedEase.config(12)} )
									.from(layer2, 0.5,{  autoAlpha: 0 , ease: SteppedEase.config(12)} )
									.from(layer3, 0.5, {  autoAlpha: 0 , ease: SteppedEase.config(12)})
									.from(layer4, 0.5, {  autoAlpha: 0 , ease: SteppedEase.config(12)})
									.from(layer5, 0.5, {  autoAlpha: 0 , ease: SteppedEase.config(12)})
									.from(layer6, 0.5, {  autoAlpha: 0 , ease: SteppedEase.config(12)})

			//						.from(GFNFoot, 0.6,{ x: -100, autoAlpha: 0 , ease: Back.easeOut}, '-=0.15' )

		const fourthjulySVG = document.getElementById('Calque_1'),
							  timeline1 = new TimelineMax();

							  timeline1
							  	.from(fourthjulySVG, 0.6, { x: -100, autoAlpha: 0 , ease: Power1.easeIn}, '-=0.15')
							  timeline1.pause();

		GFNtimeLine.repeat(1)//.to(preloader, 1, { y: -500, autoAlpha: 0 , ease: Power0.BounceIn})
		timeline1.play();
	//	this.destroy();
	}


	render(){

		return(
			<div>
	          <div id="preloader" style= {{width:'300px', height:'300px', marginRight:'auto', marginLeft:'auto'}}>
	            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
	              <div style={{ position: 'absolute', width: '100%' , height:'100%'}}>
	                <ChangingProgressbar
	                  percentages={[16,32,48,64,80,100]}
	                  textForPercentage={null}
	                  strokeWidth={3}
	                  currentIndex= {this.state.currentIndex}
	                />

	              </div>
	              <div style={{display:'flex', alignItems:'center', justifyContent:'center', width: '100%' , height:'100%'}}>
	                 <GFNFoot />
	              </div>
	              <h1  style={{textAlign:'center', marginRight:'auto', marginLeft:'auto', color:'teal'}}> Loading... </h1>
	            </div>
	          </div>

                <IconRemove/>


			</div>

			)
	}
}