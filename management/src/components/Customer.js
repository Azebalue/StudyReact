import React from "react"; //리액트 라이브러리 불러오기

//손님 클래스가 컴포넌트를 상속받아 컴포넌트로 작용하게 함
class Customer extends React.Component {
    
    //render함수: 계속 수행되며 return 구문 내부의 jsx 문법 내용을 화면에 그림
    //렌더 함수 내부에 무조건 return이 있어야 함.
    render(){
        
        return (
            <div>
                <CustomerProfile 
                    id={this.props.id}
                    image={this.props.image}
                    name={this.props.name}
                />

                <CustomerInfo 
                    birthday={this.props.birthday}
                    gender={this.props.gender}
                />

            </div> 
        );
     
        

    }

}


class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                
                <img 
                    src = {this.props.image}
                    alt = "Profile Image"
                />
                <h2>{this.props.name}{this.props.id}</h2>
            </div>

        );
    }

}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
            </div>

        );
    }

}

export default Customer; //만든 Customer 클래스/컴포넌트 내보내기