(this.webpackJsonprickipedia=this.webpackJsonprickipedia||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),r=a.n(n),i=a(8),s=a.n(i),l=(a(15),a(9)),o=a(3),j=(a(16),a.p+"static/media/logoRickMorty.e33528c2.png"),A=(a(17),function(e){var t=e.handleSubmit,a=e.setCurrentPage,n=e.currentPage;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("img",{className:"logoRickMorty logoRickiHide",src:j,alt:"Rickipedia logo",title:"Rickipedia"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h1",{className:"titleRickipedia",children:"Rickipedia"})}),Object(c.jsxs)("nav",{children:[Object(c.jsx)("i",{onClick:function(){a("home")},className:"fa fa-home ".concat("home"===n?"homeHeaderAct":"homeHeader"),"aria-hidden":"true"}),Object(c.jsx)("i",{onClick:function(){a("favorites")},className:"fa fa-heart ".concat("favorites"===n?"heartHeaderAct":"heartHeader"),"aria-hidden":"true"})]}),t?Object(c.jsx)("form",{onSubmit:t,children:Object(c.jsxs)("div",{className:"input",children:[Object(c.jsx)("input",{className:"inputText",placeholder:"Type a character name",name:"searchTerm",type:"text"}),Object(c.jsx)("button",{className:"inputSearch",type:"submit",value:"",children:Object(c.jsx)("i",{className:"fa fa-search searchImg","aria-hidden":"true"})})]})}):Object(c.jsx)("div",{style:{width:"319px"}})]})}),m=(a(18),function(e){var t=e.id,a=e.image,n=e.name,r=e.onFavorited;return Object(c.jsxs)("div",{className:"fav",children:[Object(c.jsx)("i",{onClick:function(){r({id:t,name:n,image:a})},className:"fa fa-heart heartFav","aria-hidden":"true"}),Object(c.jsx)("img",{className:"image",src:a,alt:n}),Object(c.jsx)("h3",{className:"nameFav",children:n})]})}),u=function(e){var t=e.setCurrentPage,a=e.favorites,n=e.handleFavorited,r=e.isFavorite;return Object(c.jsxs)("div",{children:[Object(c.jsx)(A,{setCurrentPage:t,currentPage:"favorites"}),Object(c.jsx)("div",{className:"allFavs",children:a.map((function(e){return Object(c.jsx)(m,{name:e.name,image:e.image,id:e.id,onFavorited:n,isFavorite:r(e.id)},e.id)}))})]})},d=a(2),g=a.n(d),h=a(4),p="https://rickandmortyapi.com/api/character",b={getCharacters:function(){var e=Object(h.a)(g.a.mark((function e(){var t,a,c,n=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.next=3,fetch("".concat(p,"?page=").concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",{count:c.info.count,pages:c.info.pages,characters:c.results});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),searchCharacter:function(){var e=Object(h.a)(g.a.mark((function e(t){var a,c,n,r=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,fetch(p+"?name="+t+"&page="+a);case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,e.abrupt("return",{count:n.info.count,pages:n.info.pages,characters:n.results});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getLocation:function(){var e=Object(h.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/location");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},v=(a(20),function(e){var t=e.character,a=e.isFavorite,n=e.onFavorited;return Object(c.jsx)("div",{className:"card",children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"headerCard",children:[Object(c.jsx)("h1",{className:"titleCharacter",children:t.name}),Object(c.jsx)("i",{onClick:function(){n({id:t.id,name:t.name,image:t.image})},className:"fa ".concat(a?"fa-heart heart-fav":"fa-heart-o heart"," "),"aria-hidden":"true"})]}),Object(c.jsxs)("div",{className:"relative",children:[Object(c.jsx)("img",{className:"imgCharacter",src:t.image,alt:t.name}),Object(c.jsx)("img",{className:"imgStatus",alt:t.status,src:"Alive"===t.status?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAEJWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjU1IgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iNTUiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTUiCiAgIHRpZmY6SW1hZ2VMZW5ndGg9IjU1IgogICB0aWZmOlJlc29sdXRpb25Vbml0PSIyIgogICB0aWZmOlhSZXNvbHV0aW9uPSIzMDAuMCIKICAgdGlmZjpZUmVzb2x1dGlvbj0iMzAwLjAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTEyLTIzVDE1OjM2OjA5KzAxOjAwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTEyLTIzVDE1OjM2OjA5KzAxOjAwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0icHJvZHVjZWQiCiAgICAg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":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAEKWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwMCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjEwMCIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMDAiCiAgIHRpZmY6SW1hZ2VMZW5ndGg9IjEwMCIKICAgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIKICAgdGlmZjpYUmVzb2x1dGlvbj0iMzAwLjAiCiAgIHRpZmY6WVJlc29sdXRpb249IjMwMC4wIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMi0yM1QxNTozMjoyNCswMTowMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMi0yM1QxNTozMjoyNCswMTowMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InByb2R1Y2VkIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZmZpbml0eSBEZXNpZ25lciAoTWF5IDMwIDIwMTkpIgogICAgICBzdEV2dDp3aGVuPSIyMDIwLTEyLTIzVDE1OjMyOjI0KzAxOjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz6sK95XAAABgmlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kb9LQlEUxz9qUZRRkENDg4Q1WVhB1BKkRAUSYgZZLfr8Ffjj8Z4S0hq0CgVRS7+G+gtqDZqDoCiCaGpoLmopeZ2nghF5Lueez/3eew73ngvWUFrJ6E0eyGTzWnDG61wKLztbXrDjoA0nnoiiq1OBgJ+G9nmPxYy3g2atxuf+tfZYXFfA0io8qahaXnhW2L+eV03eEXYoqUhM+EzYrckFhe9MPVrlV5OTVf42WQsFfWDtEnYmf3H0FyspLSMsL8eVSReU2n3Ml9jj2cUFiX3ivegEmcErvZhjGh9jDDMh8xiDjDAkKxrkeyr58+QkV5FZpYjGGklS5HGLWpDqcYkJ0eMy0hTN/v/tq54YHalWt3uh+dkw3vuhZRvKJcP4OjKM8jHYnuAyW8/PHcL4h+iluuY6gM5NOL+qa9FduNiCnkc1okUqkk3cmkjA2yl0hKH7BtpWqj2r7XPyAKEN+apr2NuHATnfufoDf8pn8VqWH1kAAAAJcEhZcwAALiMAAC4jAXilP3YAAAlgSURBVHic7Z1rrB1VGYbfD1qgtVSwidJSiUa0KF4jKII32v4Ra29ivAajgcRAJSgERASkXgKIVEIoRkj0h/FCDUV6SVoMpGm1UqCNPxBptEqlN4qtlbZQetrHH2vvstmXmbVm1prZp2c/yUlzTmet91vr3bNn5pt1kQYMGDBgwIABA/oFwIDRdccRA6s7gDyAMZLOkDRR0qTGvxPbfj9F0mhJz0vaJmlr499tbb9vMrPtFTchiL40BDhF0gxJMyVNlzQmYvXrJS2R9KCkDWZGxLpL0xeGACbp3ZI+JWfC2RVJb5EzZ4mkh83spYp0+xNgMrAAeIb62QcsBqbW3S+VA0wAfgS8WKsFvVkJnFV3PyUHGAd8B9hTb397swg4o+5+iw5wPPB1YEe9/VuIQ8C9wBvr7scoALOBf9bapXF4Cfc1e3zK/kp2lwUcK+l7kq5NpVETj0qaa2ZbU1SexBDgJEm/kvSJFPX3AdvlTFkbu+JjYlcIvEPSOh29ZkguM7AKuDh2xVENAWbLndJvjVlvnzJa0j3A3cBxsSqNYghwDPBdSYsljYtR5zDia5IexqV7ShPlGgLcJunKGHUNY/4m6Vwz212mktJnCHCJBmZILiN9HyVfA5QyBJgmaWGZOo4ypku6E5csLUThgriUwlpJJxWt4yjmm2a2oEjBQoYAE+Tupt5SpPwIAEmzzGxJaMFgQxqpg5WSPhpadoSxT9J5ZvaXkEJFriF3amCGD6+RtLTxbeJNkCHAByVdElJmhDNZ0g0hBby/shp3DmsknRsY1EhnSNKZZrbR5+CQM2SuBmYUYZSkm30P9jKkkau5JSCIg5KWSdoZUEZyI0KeCCxTlGclrZB0OKDMAUlLJe0K1JoDxLvuAlcEvMjZBby/UW488CfPcte36F0XoFeEpTReNAHTgf0eZZ4D3tko8zpgfaDmOqB87rAhvstT9IgZLeV9TLm+i24qU46Y0aKVZ8oRM9r6JdSUL8Qw5PYAwS/1qCPLlA4zWsotC2xwHv/BjYTsptXLlA4zWsqcBgwF6D/TS98L4LXAgQDBD2fU1c2UnmY0yiwM0PbhqRy9dlN6mtE4fizhI2i+mt/zvQU/Hyi2Fuj5PoRXm5JnxjnA3kB9Hy7P0W2akmlG49g7Cugvze71bMFFBQTXkG/KV3J0zyHt2K3LcvSnkW9GyFd5KweA8dk9311wDG54ZREyTcnRTW1Gk0xTcmIsakaTzxURnVVSNNgUqjOjSbAplDcD4LehugJ+EUHY2xSqN6OJtynEMQPgBeCEEDNG4//skccacl5rAu+j3vG+ucN5gJsja87optPryfFjkk7Ot86LFWZ2MOeYf0j6ayS9UHZK+rPHcX+Q9GJE3bneR+LmbMQg89a2TXM87ra5SnJvbdti9E2zeGmHGPL7CILeZtRkSpAZLTHGNMXvpgd4vKRQsBkt2lWYUsiMlhhjmfI2X8GtJUR8nsCXAydmHJPSFJ8n8NuBeTnHxDDl/GwnnNAo3CSVItyRU3frre0a8k35e8kGtzMEvCcnxtbrZ54ps0vG88VsN5zIqSUE3utpRpM8U24pEUs3Hgswo0meKWUeD672MeTsEgI/DjCjSVdTcPMRN5aIpRtDwJkBZjTpagowo2Q8P/ExpOxpeE2AGU1eZQrOjNUl4+jFNuDtAWY0mddW5uMUz/U1WeRjyKUlRQDmAycCM/F/Al8DnN74SWVGk+24Dj2ZsHcu38Z9WD5DeTMA/tje/x3DgIAbJN2U61w+hyQdG1imucxFVStMFImxSJlebDSzKa1/GNXloOcjiRUJuuqlPorEGMsMqUtfd8tlJZldOqArHX3dzZAtFQQywNHR14MzpF46+rrbNWSH3Gi+6FOmE7FHbnGysXLTlaPNiK2AjjOkwxAzGwJ2yK3U1o9slPSA3AJk683syDsK3IDw10uaJrfu1gWSemYC+gC/byPKZ3tT8DRwYUhrcaMLb6V/l4HqyPb2+lrqpws7kubLDen/XUhBM9tlZldLmiLp8RTBlcTrLkuSNiUOxJd9ki40sxvNbKhoJWa2WdJHJP0yWmTl2Wlme9v/2MuQZYmD8eGwpM+a2f0xKmusp3iRpKCzLCFdRzD2MmSVpFIrEkTgKjOL+sForED6ZVU3ByWLrh+0roY0Rok8mDScbFYXneedh5ntlzPlUIr6PdkrN4qlg6xnjcVpYskFSVelFDCzJyX9PKVGDst7LUmbZchKSfvTxJPJCjNbV4HOfL2SXa6anh/2noY0HriWJwknm0ouumb2b0mZr3QT8bIy+jUvPRLlDieAw6r22lXH1/JDZva/Xv+ZZ8hyOUer4lkzC525W4YNFWo1yfyQZxpiZnsk3RU1nGyqzhBUrbdZbnHQnvhkdL+v6p5Jqt5KYlvFetfmLfifa4iZ7ZK7I6mCqjOz4VPLivOYpN/kHeT7zmOh3JSB1EyqQKMuvSvNLHfVCC9DzOxlSdfkHlie03ArYlfFmyrSWWxmq30ODHkreL+kjnFEkRknqedc9wRcUIHGkKRv+R7sbUgjMVfF6qNzKtAQbprdJyuQWui7NFMhgJ8lfov2HEXmcYe346LE7QDYTOCKckUachywKnFDfpC4DSc0OislL5Az9SFmgyYQf+5GK/uBZOvHAzcljB3gMD1m2SYDmALsTtiop4FYM4Fb457T6LCUfCN23L6NmwocTNiwR8iY0FMg3vNIs6BNKz+lxMrWMRp5ceIGPgmcHiHOSwhbaqoID9EPW8ACtyVu6G7gcgrs0wG8Gfh14vgAnsLtLFQ/uP1Dbqyg0ZuAy4BTPeL5EHAX6c8KcBOM3hCjL6N+1wGz5MY+VbGpyxNy7zOaGxCPkctNTZZ0vtyQ0iq4W9IVjfRSaaJffHB7UD2go3/bo4OSLjWze2NWOtilrRjbJH16WOzSJklm9l+5nZ9/mKL+mnlU0lkpzKgEjq6dPm8l8U6flYDLf83DTUcebhwC7uFo2Qu3Fdwc7+sYPrtF3wdMyW/ZMAeXnOzniTQraFsyfUSAW+hmAfCvevsfcCszLAam1tkn9SXBWsAl494ld2c2U9IHKpLeImmJ3GjJR/KG6FRBXxjSDjBR7vXqTLm9AYsvYN/JejkDlkja0Hg13Tf0pSGtAGPl5ghOlEuNTGz7mSQ3HXq03FIVW/VKOqX50/zbJjOrejDeyAOXTKw/7T1gwIABAwbUyP8Bx3/9Mv3a/M8AAAAASUVORK5CYII="})]}),Object(c.jsxs)("div",{className:"genderCharacter",children:[Object(c.jsxs)("p",{children:[t.species," ",t.gender]}),Object(c.jsx)("p",{className:"status",children:t.status})]}),Object(c.jsxs)("p",{className:"originCharacter",children:[Object(c.jsx)("span",{className:"typeGrey",children:"Origin:"})," ",t.origin.name]}),Object(c.jsxs)("p",{className:"locationCharacter",children:[Object(c.jsx)("span",{className:"typeGrey",children:"Location:"})," ",t.location.name]})]},t.name)})}),I=(a(21),a(22),function(e){var t=e.direction,a=e.active;return Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"icon ".concat(t," ").concat(a&&"active"),children:Object(c.jsx)("path",{className:"secondary",fillRule:"evenodd",d:"M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"})})}),O=function(e){var t=e.resultsPage,a=e.totalPages,n=e.onPageUp,r=e.onPageDown;return Object(c.jsxs)("div",{className:"pagination",children:[1!==t&&Object(c.jsx)("span",{onClick:r,children:Object(c.jsx)(I,{direction:"left"})}),Object(c.jsxs)("p",{children:[t," of ",a]}),t!==a&&Object(c.jsx)("span",{onClick:n,children:Object(c.jsx)(I,{direction:"right",active:!0})})]})},C=function(e){var t=e.setCurrentPage,a=e.isFavorite,r=e.handleFavorited,i=Object(n.useState)([]),s=Object(o.a)(i,2),l=s[0],j=s[1],m=Object(n.useState)(1),u=Object(o.a)(m,2),d=u[0],p=u[1],I=Object(n.useState)(""),C=Object(o.a)(I,2),Z=C[0],S=C[1],k=Object(n.useState)(""),f=Object(o.a)(k,2),N=f[0],x=f[1],L=Object(n.useState)(34),M=Object(o.a)(L,2),R=M[0],w=M[1],y=Object(n.useState)(1),G=Object(o.a)(y,2),D=G[0],F=G[1],W=Object(n.useState)(1),U=Object(o.a)(W,2),J=U[0],Y=U[1];function P(){return(P=Object(h.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=t.target.elements.searchTerm.value,S(a),x("search");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getCharacters(d);case 2:t=e.sent,w(t.pages),j(t.characters);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(h.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.searchCharacter(Z,D);case 2:t=e.sent,Y(t.pages),j(t.characters);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}"search"!==N?function(){e.apply(this,arguments)}():function(){t.apply(this,arguments)}()}),[d,Z,D,N]),Object(c.jsxs)("main",{className:"body",children:[Object(c.jsx)(A,{setCurrentPage:t,handleSubmit:function(e){return P.apply(this,arguments)},currentPage:"home"}),"search"===N&&Object(c.jsxs)("div",{className:"searchMode",children:[Object(c.jsxs)("p",{className:"searchMode-title",children:["Seeing results for"," ",Object(c.jsx)("span",{className:"searchMode-word",children:Z})]}),Object(c.jsx)("button",{className:"searchMode-btn",onClick:function(){x(""),S("")},children:"reset"})]}),Object(c.jsx)("div",{className:"cards",children:l.map((function(e){return Object(c.jsx)(v,{character:e,isFavorite:a(e.id),onFavorited:r},e.id)}))}),Object(c.jsx)(O,{resultsPage:"search"!==N?d:D,totalPages:"search"!==N?R:J,onPageUp:function(){"search"===N?F(D+1):p(d+1)},onPageDown:function(){"search"===N?F(D-1):p(d-1)}})]})};var Z=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)("home"),s=Object(o.a)(i,2),j=s[0],A=s[1],m=function(e){var t=e.id,c=e.name,n=e.image,i=a.findIndex((function(e){return e.id===t}));-1===i?a.push({id:t,name:c,image:n}):a.splice(i,1),r(Object(l.a)(a)),console.log("Favorites set to ",a)},d=function(e){return-1!==a.findIndex((function(t){return t.id===e}))};return"home"===j?Object(c.jsx)(C,{isFavorite:d,handleFavorited:m,setCurrentPage:A}):Object(c.jsx)(u,{setCurrentPage:A,favorites:a,handleFavorited:m,isFavorite:d})};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(Z,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.db874d9f.chunk.js.map