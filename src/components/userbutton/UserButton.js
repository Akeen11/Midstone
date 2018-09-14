import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class UserButton extends React.Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null

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

        return (
            <div>
                {this.isAuthenticated() &&
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                        <DropdownToggle caret>
                            {user.username}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Settings:</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                                onClick={() => {
                                    document.location.href = 'http://localhost:3000/user'
                                }
                                }>My Page</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                }
            </div>
        )
    }
}