import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import query from '../queries/CurrentUser';

export default (WrappedComponent) => {
    class RequireAuth extends Component {
        componentWillUpdate(nextProps) {
            const {loading, user} = nextProps.data;
            console.log( loading, user );

            if (!loading && !user) {
                hashHistory.push('/login');
            }
        }

        render(){
            return <WrappedComponent {...this.props} />
        }
    }

    return graphql(query)(RequireAuth);
};