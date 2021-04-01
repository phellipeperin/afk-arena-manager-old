import LoginPage from '../../pages/Login/LoginPage';

import AdminHeroEditPage from '../../pages/HeroEdit/AdminHeroEditPage';
import AdminHeroListPage from '../../pages/HeroList/AdminHeroListPage';

import PlayerHeroEditPage from '../../pages/HeroEdit/PlayerHeroEditPage';
import PlayerHeroListPage from '../../pages/HeroList/PlayerHeroListPage';
import PlayerStatisticsPage from '../../pages/Statistics/PlayerStatisticsPage';
import PlayerMissingInfoPage from '../../pages/MissingInfo/PlayerMissingInfoPage';
import FriendListPage from '../../pages/Friends/FriendListPage';

import ProfilePage from '../../pages/Profile/ProfilePage';
import ChangePasswordPage from '../../pages/ChangePassword/ChangePasswordPage';

import AboutPage from '../../pages/About/AboutPage';
import CreditsPage from '../../pages/Credits/CreditsPage';
import RoadMapPage from '../../pages/RoadMap/RoadMapPage';

import ForbiddenPage from '../../pages/Forbidden/ForbiddenPage';
import NotFoundPage from '../../pages/NotFound/NotFoundPage';

export default [
    { path: '/', name: 'login', component: LoginPage, exact: true, isPublic: true },

    { path: '/admin/hero-add', name: 'adminHeroAdd', component: AdminHeroEditPage, requiredRole: 'ADMIN' },
    { path: '/admin/hero-edit/:id', name: 'adminHeroEdit', component: AdminHeroEditPage, requiredRole: 'ADMIN' },
    { path: '/admin/hero-list', name: 'adminHeroList', component: AdminHeroListPage, requiredRole: 'ADMIN' },

    { path: '/player/hero-edit/:id', name: 'playerHeroEdit', component: PlayerHeroEditPage },
    { path: '/player/hero-list', name: 'playerHeroList', component: PlayerHeroListPage },
    { path: '/player/statistics', name: 'playerStatistics', component: PlayerStatisticsPage },
    { path: '/player/missing-info', name: 'playerMissingInfo', component: PlayerMissingInfoPage },
    { path: '/player/friends', name: 'friendList', component: FriendListPage },

    { path: '/profile', name: 'profile', component: ProfilePage },
    { path: '/change-password', name: 'changePassword', component: ChangePasswordPage },

    { path: '/about', name: 'about', component: AboutPage },
    { path: '/credits', name: 'credits', component: CreditsPage },
    { path: '/road-map', name: 'roadMap', component: RoadMapPage },

    { path: '/forbidden', name: 'forbidden', component: ForbiddenPage, exact: true },
    { path: '*', name: 'notFound', component: NotFoundPage, exact: true, isPublic: true },
];
