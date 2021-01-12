import styled from 'styled-components';

const SigninStyle = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: whitesmoke;

    .LoginBox{
        width: 390px;
        margin: auto;
        height: 460px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        border-radius: 10px;
        animation: expand 1s;
        box-shadow: 0px 0px 67px #8c8c8c5e;

        .Header{
            padding-top: 20px;
            font-size: 20px;
            padding-bottom: 20px;
            color: #545454;
            letter-spacing: 2px;
            text-align: center;
        }
        .Body{
            justify-content: space-around;
            text-align: left;
            padding: 20px;
            height: 305px;

            label {
                margin-bottom: 0rem;
            }

            .form-group {
                margin-bottom: 0rem;
                height: 110px;
            }

            .errorinput{
                color: #ff0000c9;
                font-size: 13px;
                margin-left: -72px;
            }

            .UserType{
                display: flex;
                .form-check {
                    display: flex;
                    
                    .form-check-input {
                        margin-top: 0rem;
                    }
                    .form-check-label{
                        margin: -5px 5px;
                    }
                }
            }

            .select{
                width: 60%;
                margin: 10px 0px 0px 10px;
            }
        }
        .Footer{
            display: flex;
            justify-content: space-around;
            margin: 20px;


            .btn{
                border-radius: 0.15rem;
            }
        }
    }
    @keyframes expand {
        0% {
          top: -900px;
          opacity: 0;
        }
        100% {
          top: 0px;
          opacity: 1;
        }
    }
  `;
export { SigninStyle }