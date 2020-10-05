import React from 'react';
import Cover from '../components/Cover';
import Banner from '../components/Banner';
import { RoomObject } from '../models/models';


// @ts-ignore
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
// @ts-ignore
import images from 'react-payment-inputs/images';


interface IRoomProps {
    room: RoomObject;
}


const Payments: React.FC<IRoomProps> = React.memo((props) => {
    

    function PaymentInputs() {
        const {
          wrapperProps,
          getCardImageProps,
          getCardNumberProps,
          getExpiryDateProps,
          getCVCProps
        } = usePaymentInputs();
      
        return (
          <PaymentInputsWrapper {...wrapperProps}>
            <svg {...getCardImageProps({ images })} />
            <input {...getCardNumberProps()} />
            <input {...getExpiryDateProps()} />
            <input {...getCVCProps()} />
          </PaymentInputsWrapper>
        );
      }
    // const { name, slug, images, price } = props.room;
    return (
        <React.Fragment>
            <Cover coverClass="roomsHero">
                <Banner 
                title="complete checkout"
                >
                </Banner>
            </Cover>
            <section className="single-room">
                <div className="single-room-info">
                    <article className="desc">
                        <h2>Complete your payment details</h2>
                        Credit card details <br/>
                        <PaymentInputs/> <br/>
                        <br/>
                        <div className="btn-primary">Pay!</div>
                    </article>
                </div>
            </section>
        </React.Fragment>
    )
})

export default Payments;
