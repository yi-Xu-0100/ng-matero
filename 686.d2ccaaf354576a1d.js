"use strict";(self.webpackChunkng_matero=self.webpackChunkng_matero||[]).push([[686],{7686:(w,h,r)=>{r.r(h),r.d(h,{PermissionsModule:()=>I});var Z=r(6224),p=r(9132),f=r(7579),T=r(2722),e=r(4650),m=r(4954),c=r(4006),a=r(811),g=r(2802),d=r(6895);let _=(()=>{class s{constructor(n,o){this.rolesSrv=n,this.permissionsSrv=o,this.permissionsOfRole={ADMIN:["canAdd","canDelete","canEdit","canRead"],MANAGER:["canAdd","canEdit","canRead"],GUEST:["canRead"]},this._destroy$=new f.x}ngOnInit(){this.currentRole=Object.keys(this.rolesSrv.getRoles())[0],this.currentPermissions=Object.keys(this.permissionsSrv.getPermissions()),this.rolesSrv.roles$.pipe((0,T.R)(this._destroy$)).subscribe(n=>{console.log(n)}),this.permissionsSrv.permissions$.pipe((0,T.R)(this._destroy$)).subscribe(n=>{console.log(n)})}ngOnDestroy(){this._destroy$.next(),this._destroy$.complete()}onPermissionChange(){this.currentPermissions=this.permissionsOfRole[this.currentRole],this.rolesSrv.flushRolesAndPermissions(),this.rolesSrv.addRoleWithPermissions(this.currentRole,this.currentPermissions)}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(m.cM),e.Y36(m.YI))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-permissions-role-switching"]],decls:24,vars:7,consts:[["href","https://github.com/AlexKhymenko/ngx-permissions","target","_blank"],[3,"ngModel","ngModelChange","change"],["value","ADMIN"],["value","MANAGER"],["value","GUEST"]],template:function(n,o){1&n&&(e._UZ(0,"page-header"),e.TgZ(1,"p"),e._uU(2," The permissions management is powered by "),e.TgZ(3,"a",0)(4,"code"),e._uU(5,"ngx-permissions"),e.qZA()(),e._uU(6,".\n"),e.qZA(),e.TgZ(7,"mat-button-toggle-group",1),e.NdJ("ngModelChange",function(u){return o.currentRole=u})("change",function(){return o.onPermissionChange()}),e.TgZ(8,"mat-button-toggle",2),e._uU(9,"ADMIN"),e.qZA(),e.TgZ(10,"mat-button-toggle",3),e._uU(11,"MANAGER"),e.qZA(),e.TgZ(12,"mat-button-toggle",4),e._uU(13,"GUEST"),e.qZA()(),e.TgZ(14,"p"),e._uU(15," Your current role: "),e.TgZ(16,"code"),e._uU(17),e.ALo(18,"json"),e.qZA()(),e.TgZ(19,"p"),e._uU(20," Your current permissions: "),e.TgZ(21,"code"),e._uU(22),e.ALo(23,"json"),e.qZA()()),2&n&&(e.xp6(7),e.Q6J("ngModel",o.currentRole),e.xp6(10),e.Oqu(e.lcZ(18,3,o.currentRole)),e.xp6(5),e.Oqu(e.lcZ(23,5,o.currentPermissions)))},dependencies:[c.JJ,c.On,a.A9,a.Yi,g.q,d.Ts]}),s})(),P=(()=>{class s{constructor(n,o,i){this.rolesSrv=n,this.permissionsSrv=o,this.router=i,this.permissionsOfRole={ADMIN:["canAdd","canDelete","canEdit","canRead"],MANAGER:["canAdd","canEdit","canRead"],GUEST:["canRead"]}}ngOnInit(){this.currentRole=Object.keys(this.rolesSrv.getRoles())[0],this.currentPermissions=Object.keys(this.permissionsSrv.getPermissions())}onPermissionChange(){this.currentPermissions=this.permissionsOfRole[this.currentRole],this.rolesSrv.flushRolesAndPermissions(),this.rolesSrv.addRoleWithPermissions(this.currentRole,this.currentPermissions),this.router.navigateByUrl("/dashboard")}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(m.cM),e.Y36(m.YI),e.Y36(p.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-permissions-route-guard"]],decls:20,vars:7,consts:[[3,"ngModel","ngModelChange","change"],["value","ADMIN"],["value","MANAGER"],["value","GUEST"]],template:function(n,o){1&n&&(e._UZ(0,"page-header"),e.TgZ(1,"p"),e._uU(2," The route will be redirected to dashboard after change permission.\n"),e.qZA(),e.TgZ(3,"mat-button-toggle-group",0),e.NdJ("ngModelChange",function(u){return o.currentRole=u})("change",function(){return o.onPermissionChange()}),e.TgZ(4,"mat-button-toggle",1),e._uU(5,"ADMIN"),e.qZA(),e.TgZ(6,"mat-button-toggle",2),e._uU(7,"MANAGER"),e.qZA(),e.TgZ(8,"mat-button-toggle",3),e._uU(9,"GUEST"),e.qZA()(),e.TgZ(10,"p"),e._uU(11," Your current role: "),e.TgZ(12,"code"),e._uU(13),e.ALo(14,"json"),e.qZA()(),e.TgZ(15,"p"),e._uU(16," Your current permissions: "),e.TgZ(17,"code"),e._uU(18),e.ALo(19,"json"),e.qZA()()),2&n&&(e.xp6(3),e.Q6J("ngModel",o.currentRole),e.xp6(10),e.Oqu(e.lcZ(14,3,o.currentRole)),e.xp6(5),e.Oqu(e.lcZ(19,5,o.currentPermissions)))},dependencies:[c.JJ,c.On,a.A9,a.Yi,g.q,d.Ts]}),s})();var x=r(4906);function U(s,t){1&s&&(e.TgZ(0,"p",11),e._uU(1," I should see it only admin "),e.qZA())}function v(s,t){1&s&&(e.TgZ(0,"p",11),e._uU(1," Usage on both only and except I should see it only admin "),e.qZA())}function C(s,t){1&s&&(e.TgZ(0,"p",12),e._uU(1,"I will see it only guest"),e.qZA())}function R(s,t){1&s&&(e.TgZ(0,"p",13),e._uU(1,"I will see it except adminnnnn"),e.qZA())}function b(s,t){1&s&&(e.TgZ(0,"p",14),e._uU(1,"I should see it except admin"),e.qZA())}function y(s,t){1&s&&(e.TgZ(0,"div"),e._uU(1," Testing template\n"),e.qZA())}function M(s,t){1&s&&(e.TgZ(0,"div"),e._uU(1," Testing template\n"),e.qZA())}function O(s,t){1&s&&(e.TgZ(0,"p",15),e._uU(1,"else block"),e.qZA())}function N(s,t){1&s&&(e.TgZ(0,"p",16),e._uU(1,"then block"),e.qZA())}function S(s,t){1&s&&(e.TgZ(0,"button"),e._uU(1," This should be visible to admin or superadmin "),e.qZA())}function E(s,t){1&s&&(e.TgZ(0,"button"),e._uU(1,"WTF"),e.qZA())}const l=function(){return["admin"]},q=function(){return["guest"]},Y=function(){return["adminnnnn"]},J=function(){return[]};const D=[{path:"role-switching",component:_},{path:"route-guard",component:P,canActivate:[m.DD],data:{permissions:{except:"GUEST",redirectTo:"/dashboard"}}},{path:"test",component:(()=>{class s{constructor(n){this.permissionsSrv=n,this.comparedPermission=["guest"]}ngOnInit(){}getPermissions(){return Object.keys(this.permissionsSrv.getPermissions())}addPermission(){this.permissionsSrv.addPermission("admin",()=>new Promise((n,o)=>{setTimeout(()=>n(!0),2e3)}))}removePermission(){this.permissionsSrv.removePermission("admin")}unAuthorized(){console.log("unAuthorized")}authorized(){console.log("authorizes")}changeToAdmin(){this.comparedPermission=["admin"],console.log(this.comparedPermission)}changeToAnotherPermission(){this.comparedPermission=["awesome"],console.log(this.comparedPermission)}changeToGuest(){this.comparedPermission=["guest"],console.log(this.comparedPermission)}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(m.YI))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-permissions-test"]],decls:39,vars:28,consts:[["type","danger"],[3,"click"],["permissions","",3,"ngxPermissionsOnly"],[3,"ngxPermissionsOnly","ngxPermissionsExcept"],["permissions","",3,"ngxPermissionsExcept","permissionsAuthorized","permissionsUnauthorized"],["permissions","",3,"ngxPermissionsExcept"],[4,"ngxPermissionsOnly","ngxPermissionsOnlyElse","ngxPermissionsOnlyThen"],[4,"ngxPermissionsExcept","ngxPermissionsExceptElse","ngxPermissionsExceptThen"],["a",""],["b",""],[4,"ngxPermissionsOnly"],[1,"bg-green-500","text-white"],[1,"bg-purple-500","text-white"],[1,"bg-orange-500","text-white"],[1,"bg-indigo-500","text-white"],[1,"bg-gray-900","text-white"],[1,"bg-gray-300"]],template:function(n,o){if(1&n&&(e._UZ(0,"page-header"),e.TgZ(1,"mtx-alert",0),e._uU(2,"The permissions check will delay 2s."),e.qZA(),e.TgZ(3,"p")(4,"button",1),e.NdJ("click",function(){return o.addPermission()}),e._uU(5,"Add Permission [ admin ]"),e.qZA(),e.TgZ(6,"button",1),e.NdJ("click",function(){return o.removePermission()}),e._uU(7,"Remove Permission [ admin ]"),e.qZA()(),e.YNc(8,U,2,0,"ng-template",2),e.YNc(9,v,2,0,"ng-template",3),e.YNc(10,C,2,0,"ng-template",2),e.YNc(11,R,2,0,"ng-template",4),e.NdJ("permissionsAuthorized",function(){return o.authorized()})("permissionsUnauthorized",function(){return o.unAuthorized()}),e.YNc(12,b,2,0,"ng-template",5),e.YNc(13,y,2,0,"div",6),e.YNc(14,M,2,0,"div",7),e.YNc(15,O,2,0,"ng-template",null,8,e.W1O),e.YNc(17,N,2,0,"ng-template",null,9,e.W1O),e.TgZ(19,"p"),e._uU(20," Compared permission: "),e.TgZ(21,"code"),e._uU(22),e.ALo(23,"json"),e.qZA()(),e.TgZ(24,"div")(25,"button",1),e.NdJ("click",function(){return o.changeToAdmin()}),e._uU(26,"Change To Admin Permission"),e.qZA(),e.TgZ(27,"button",1),e.NdJ("click",function(){return o.changeToAnotherPermission()}),e._uU(28,"Change To Awesome Permission"),e.qZA(),e.TgZ(29,"button",1),e.NdJ("click",function(){return o.changeToGuest()}),e._uU(30,"Change To Guest Permission"),e.qZA()(),e.TgZ(31,"div"),e.YNc(32,S,2,0,"button",10),e.YNc(33,E,2,0,"button",10),e.qZA(),e.TgZ(34,"p"),e._uU(35," Your current permissions: "),e.TgZ(36,"code"),e._uU(37),e.ALo(38,"json"),e.qZA()()),2&n){const i=e.MAs(16),u=e.MAs(18);e.xp6(8),e.Q6J("ngxPermissionsOnly",e.DdM(20,l)),e.xp6(1),e.Q6J("ngxPermissionsOnly",e.DdM(21,l))("ngxPermissionsExcept","hhhhh"),e.xp6(1),e.Q6J("ngxPermissionsOnly",e.DdM(22,q)),e.xp6(1),e.Q6J("ngxPermissionsExcept",e.DdM(23,Y)),e.xp6(1),e.Q6J("ngxPermissionsExcept",e.DdM(24,l)),e.xp6(1),e.Q6J("ngxPermissionsOnly",e.DdM(25,l))("ngxPermissionsOnlyElse",i)("ngxPermissionsOnlyThen",u),e.xp6(1),e.Q6J("ngxPermissionsExcept",e.DdM(26,l))("ngxPermissionsExceptElse",i)("ngxPermissionsExceptThen",u),e.xp6(8),e.Oqu(e.lcZ(23,16,o.comparedPermission)),e.xp6(10),e.Q6J("ngxPermissionsOnly",o.comparedPermission),e.xp6(1),e.Q6J("ngxPermissionsOnly",e.DdM(27,J)),e.xp6(4),e.Oqu(e.lcZ(38,18,o.getPermissions()))}},dependencies:[x.S,m.gE,g.q,d.Ts]}),s})(),canActivate:[m.DD],data:{permissions:{only:"ADMIN",redirectTo:"/dashboard"}}}];let G=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[p.Bz.forChild(D),p.Bz]}),s})(),I=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[Z.m,G]}),s})()}}]);