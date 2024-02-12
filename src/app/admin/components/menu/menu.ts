import { Menu } from './menu.model';

export const menuItems = [

       new Menu(10, 'Dashboard', '/admin/dashboard/dashboard', null, 'laptop', null, false, 0),

]

//SuperAdminMenu
export const menusuperadmin = [
       //Superadmin Menu Start//
       new Menu(10, 'Dashboard', '/admin/superadmin/dashboard', null, 'dashboard', null, false, 0),
       new Menu(11, 'User', '/admin/superadmin/listuser', null, 'list', null, false, 0),
       new Menu(12, 'User Player', '/admin/superadmin/listuserplayer', null, 'list', null, false, 0),
       //Superadmin Menu End//
]

//ContentAdminMenu
export const menucontentadmin = [
       //Contentadmin Menu Start//
       new Menu(13, 'Dashboard', '/admin/contentadmin/dashboard', null, 'dashboard', null, false, 0),
       new Menu(14, 'Content', '/admin/contentadmin/listcontent', null, 'list', null, false, 0),
       new Menu(15, 'Content Update', '/admin/contentadmin/listcontentupdate', null, 'list', null, false, 0),
       //Contentadmin Menu End//
]

//QualityAssuranceAdmin Menu
export const menuqa = [
       //QualityAssuranceAdmin Menu Start/
       new Menu(16, 'Dashboard', '/admin/qualityassurance/dashboard', null, 'dashboard', null, false, 0),
       new Menu(17, 'Content', '/admin/qualityassurance/listcontent', null, 'list', null, false, 0),
       new Menu(18, 'Advertise Content', '/admin/qualityassurance/listadvcontent', null, 'list', null, false, 0),
       new Menu(19, 'Content Update', '/admin/qualityassurance/listcontentupdate', null, 'list', null, false, 0),
       //QualityAssuranceAdmin Menu End//
]

//SalesPesronAdmin Menu

export const menusalespersonadminuser = [
       //Salespersonadmin Menu Start//
       new Menu(20, 'Dashboard', '/admin/salespersonadmin/dashboard', null, 'dashboard', null, false, 0),
       new Menu(21, 'Advertise Content', '/admin/salespersonadmin/listadvertisecontent', null, 'list', null, false, 0),
       new Menu(22, 'Advertise Ads On', '/admin/salespersonadmin/listadvertiseaddson', null, 'list', null, false, 0),
       new Menu(23, 'Listing List', '/admin/salespersonadmin/listlisting', null, 'list', null, false, 0),
       //Salespersonadmin Menu End//
]

//im10salesadmin Menu
export const menuim10salesadmin = [
       //im10salesadmin Menu Start//
       new Menu(24, 'Dashboard', '/admin/im10salesadmin/dashboard', null, 'dashboard', null, false, 0),
       new Menu(25, 'Player List', '/admin/im10salesadmin/listplayerdetails', null, 'list', null, false, 0),
       new Menu(35, 'Player Data', '/admin/im10salesadmin/listplayerdata', null, 'list', null, false, 0),
       //im10salesadmin Menu End//
]

//Playerrepresentativeadmin Menu
export const menuplayerrepresentativeadmin = [
       //playerrepresentativeadmin Menu Start//
       new Menu(26, 'Dashboard', '/admin/playerrepresentativeadmin/dashboard', null, 'dashboard', null, false, 0),
       new Menu(27, 'Content Comment List', '/admin/playerrepresentativeadmin/listcontentcomment', null, 'list', null, false, 0),
       //playerrepresentativeadmin Menu End//
]

export const menuitsupportadmin = [
       //itsupportadmin Menu Start//
       new Menu(28, 'Dashboard', '/admin/itsupportadmin/dashboard', null, 'dashboard', null, false, 0),
       new Menu(29, 'Error/ Issue log List', '/admin/itsupportadmin/listerrorissuelog', null, 'list', null, false, 0),
       //itsupportadmin Menu End//
]

//im10marketingcampaigns Menu 
export const menuim10marketingcampaigns = [
       //im10marketingcampaigns Menu Start//
       new Menu(30, 'Dashboard', '/admin/im10marketingcampaigns/dashboard', null, 'dashboard', null, false, 0),
       new Menu(31, 'Campaign', '/admin/im10marketingcampaigns/listcampaing', null, 'list', null, false, 0),
       new Menu(32, 'Social Media', '/admin/im10marketingcampaigns/addcampaignsocialmedia', null, 'list', null, false, 0),
       //im10marketingcampaigns Menu End//
]

//EdnorsementManagerAdmin Menu
export const menuendorsementmanageradmin = [
       //endorsementmanageradmin Menu Start//
       new Menu(33, 'Dashboard', '/admin/endorsementmanageradmin/dashboard', null, 'dashboard', null, false, 0),
       new Menu(34, 'Player Endorsement', '/admin/endorsementmanageradmin/listplayerendorsement', null, 'list', null, false, 0),
       //endorsementmanageradmin Menu End//
]