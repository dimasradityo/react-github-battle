var USER_DATA = {
    fullName: 'Dimas Radityo',
    userName: 'dimasradityo',
    imageUrl: 'http://placehold.it/350x350'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfileName = React.createClass({
    render: function () {
        return <div> {this.props.name} </div>
        
    }
});

var ProfileUser = React.createClass({
    render: function(){
        return (
            <div>
                <a href={'https://github.com/' + this.props.username}>
                    {this.props.username}
                </a>
            </div>
        )
    }
});

var ProfileImage = React.createClass({
    render: function (){
        return <img src={this.props.image} style={{height: 100, width: 100}}/>        
    }
});

var Avatar = React.createClass({
    render: function(){
        return (
        <div>
            <ProfileImage image = {this.props.user.imageUrl}/>
            <ProfileName name = {this.props.user.fullName}/>
            <ProfileUser username = {this.props.user.userName}/>            
        </div>
        )
    }
});

ReactDOM.render(<Avatar user={USER_DATA}/>, document.getElementById('app'));