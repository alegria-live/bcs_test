import React from 'react';
const appContext = React.createContext({
    characterId: null,
    setCharacterId: () => {},
    currentPage: null,
    setCurrentPage: () => {},
    showDrawer: false,
    setShowDrawer: () => {}
});
export default appContext;