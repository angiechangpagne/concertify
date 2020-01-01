import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventPage from './EventPage';

export interface HomePageProps {

}

export interface HomePageState {
    searched: Boolean,
    searchInput: String,
}

class HomePage extends React.Component<HomePageProps, HomePageState> {
    constructor(props: HomePageProps) {
        super(props);
        this.state = {
            searched: true,
            searchInput: '',
        };
        this.search = this.search.bind(this)
    }

    setSearchInput() {
        this.setState({
            // searchInput: event.target.value
        })
    }

    search() {
        fetch('/api', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                searchInput: this.state.searchInput
            })
        })
    }

    render() {
        const eventPage = this.state.searched ? <EventPage search={this.search} /> : null;

        return (
            <View>
                { eventPage }
            </View>
        );
    }
}

export default HomePage;
