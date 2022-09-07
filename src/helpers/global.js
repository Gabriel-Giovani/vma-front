import React from 'react';

export default class Global {
    static CurrentPage = '';

    static App = null;
    static showLoginFame = false;
    static showMessagesModal = false;

    static showLogin(val) {
        this.showLoginFrame = val;
        this.App.forceUpdate();
    }

    static showMessages(val) {
        this.showMessagesModal = val;
        this.App.forceUpdate();
    }

    static overridePrototypes() {
        // React
        // Component
        React.Component.prototype.setLoadState = function(element) {
            if(!this.state.loading) {
                let arr = [];
                arr[element] = true;
                this.setState({ loading: arr });
            } else {
                let loading = this.state.loading;
                loading[element] = true;
                this.setState({ loading });
            }
        };

        React.Component.prototype.unsetLoadState = function(element) {
            if (!this.state.loading) {
                let arr = [];
                arr[element] = false;
                this.setState({ loading: arr });
            } else {
                let loading = this.state.loading;
                loading[element] = false;
                this.setState({ loading });
            }
        };

        React.Component.prototype.onLoadState = function (element) {
            if (!this.state.loading)
                return false;

            return this.state.loading[element] === true;
        };
    }

    /**
     * funcão usada para disparar acoes na troca de props.
     * as funcoes devem ser vinculadas no state para serem
     * usadas a partir do `state` que vem da funcao estática.
     *
     * também será chamada a funcão `onPropsChanged` do state
     * do component atual caso ela exista.
     */
    static getDerivedStateFromProps(props, state) {
        if (state.onPropsChanged)
            state.onPropsChanged(props);

        return {};
    }
}