import React , {Component} from 'react';
import Aux from '../Aux/Aux'
import someClass from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    isShown={this.state.showSideDrawer} 
                />
                <main className={someClass.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;