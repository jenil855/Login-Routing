import styled from 'styled-components';

const PageStyle = styled.div`
    .Page{
        height: 100%;
        width: 100%;
        background-color: #fffafa8a;

        .Content{
            height:fit-content;
            padding: 19px 10px;
            background-color: #ececec;
            overflow: auto;
            display: flex;

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
    }
`;
export { PageStyle }