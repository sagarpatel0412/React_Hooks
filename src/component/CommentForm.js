import React,{useState} from 'react';
{/*class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            appForm:false
        }

        
    }
    appFormMax(){
        this.setState({
            appForm: !this.state.appForm
        })
    }
 render(){
     
     return(
         <div>
             <form>
             <input placeholder="comment your views"/>
             <button onClick={() => this.appFormMax()}>Reply</button>
         </form>
            {
                this.state.appForm ?
                <div>
                    <form>
             <input placeholder="reply your views"/>
             <button>post</button>
         </form>
                </div>
                :
                null
                

            }
         </div>
     );
 }

}*/}


function CommentForm() {
    const [appForm,appFormMax] = useState(false);
    return (
        <div>
            <form>
                <input placeholder="enter your comment"/>
                <button onClick={() => appFormMax(!appForm)}>Reply</button>
                {
                    
                    appForm ? 
                    
                        <div>
                            
                            <input placeholder="your reply"/>
                    <button>Post</button>
                        </div>
                    
                    
                    
                
                    
                    :
                    <div>
                    
                    <h1>sorry no elemnt found</h1>

                    </div>
                    
                   
                    
                }
            </form>
        </div>
    );
}


export default CommentForm;