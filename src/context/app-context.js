import React from 'react';
const appContext = React.createContext({
    characterId: null,
    setCharacterId: () => {},
    currentPage: null,
    setCurrentPage: () => {}
});
export default appContext;