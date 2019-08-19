import React from 'react';
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import WelcomePage from './WelcomePage';
import EpisodesList from './EpisodesList';
import { Route } from 'react-router-dom';

function AppRouter () {
    return (
        <div>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/characters/" component={CharacterList} />
            <Route path="/location/" component={LocationsList} />
            <Route path="/episodes/" component={EpisodesList} />
        </div>
    )
}

export default AppRouter;