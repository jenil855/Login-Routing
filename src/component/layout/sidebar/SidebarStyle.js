import styled from 'styled-components';

const Sidebarstyle = styled.div`
    .sidebar{
        height: calc(100vh - 140px);
        width: 60px;
        color: #9ca1a7;
        background-color: #f5f5f5; 
        border-radius: 5px;
        overflow: auto;

        ::-webkit-scrollbar {
          width: 4px;
          height: 3px;
        }       
        ::-webkit-scrollbar-thumb {
          background: #424242; 
          border-radius: 10px;
        }      
        ::-webkit-scrollbar-thumb:hover {
          background: #656363; 
        }
    }
    .icon{
      height: 65px;
      font-size: 1.3em;
      border-top: 1px solid gray;
      border-bottom: 1px solid gray;
      opacity: .6;
      padding: 13px 19px;
      cursor: pointer;
    }
    .iconselect{
      background-color: #00b2ff63;
    }
  `;
export { Sidebarstyle }