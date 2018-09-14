import React, { Redirect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {

        const user = JSON.parse(localStorage.getItem("credentials"))

        if (user) {
            return (
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        {user.username}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Settings:</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            );
        } else {
            return <Redirect to="/" />
        }
    }
}