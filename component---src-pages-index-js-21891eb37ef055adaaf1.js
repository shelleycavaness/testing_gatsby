(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(146),s=a(152),o=a(161),l=a(162),d=a.n(l),c=function(){return r.a.createElement(n.b,{query:"3201450407",render:function(e){return r.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:o})},u=a(150);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(u.a,{title:"Home"}),r.a.createElement("h1",null,"Hi people"),r.a.createElement("p",null,"Welcome to your new Gatsby Cat site."),r.a.createElement("p",null,"Now go build something great."),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},r.a.createElement(c,null)),r.a.createElement(n.a,{to:"/page-2/"},"Go to page 2"))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(147);var d=r.a.createContext({}),c=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},147:function(e,t,a){var i;e.exports=(i=a(149))&&i.default||i},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Kitty"}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},150:function(e,t,a){"use strict";var i=a(151),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(154),d=a.n(l);function c(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,o=i.data.site,l=t||o.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=c},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Kitty",description:"Kick off your next, great Gatsby cat project with this starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@fang-kitty.js"}}}}},152:function(e,t,a){"use strict";var i=a(148),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(146),d=function(e){var t=e.siteTitle;return n.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:"kitty cat"};var c=d,u=(a(153),function(e){var t=e.children;return n.a.createElement(l.b,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.a.createElement("main",null,t),n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:i})});u.propTypes={children:o.a.node.isRequired};t.a=u},161:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAE6UlEQVQ4y1WUa1DUVRjG90sf6mtjoFyXZRdkFYTyjiGmMEJ5SVHUZFBRQRFUvGGOkAFaOFPjlKKpeSEvTDKYoqngcFsRRbnfRBYRhOV+EQXTfnXOsWj68J+dPfvf33nf533eR5ObdYnCvCs8LLpJZUkOj6ru8KS+mJbGUlqbyrE0V9LeUjXytD2tUL+Z6+5RV2miqjRX/fdu/lUkSyNhJfduUVuRz9OGByOgztYaetof0df5+H+PPJPgvs56ui21mB/dF/8toPR+loJqJL2mPJ/66kIqSnLpbKvlzVAbL/qaeN7TyEC3eeSR31/2N/HX604qHuYSumIpcbu3iS4qqC7LU4Vpyh/cVgdp547j5KBlfmAAqaeOiErL6e8yMyjAw89bGOx9Qm9HPc3mUs6e/JEJRiPvvfMuK4ODVDcNtUWqfY3UoUtUlXUtDS+9DkcbB+ysbfBy92DRvE+JCFvFpg3rWBu6kvlz/fEcZ8TGyhpPt/Hobe2J3x3D0ECzkOuh6lLTKDRQmrTXsnZRAEZnA256A/ajRwvwaHGBHUs+mYiznR22AuRk74Crs54pHp5MEO+dP53Cn8MWpbscpqbZXEJHSzVvxOGhxFi0VlYYtE4CZIut9Rh09o7M85mIu4sBZyGJq84ZJzt7XJ10GAT8/Jmj8KqdjmfVaqAaSe621PH6ZRs7oiOwHfUBnkKfmVMnsTzQB7+pnuwI/QxXrVbpJquTFxoE0Or9UWzfHKkqlAxpKY30mZxgx7MavCeLSgw6PMa6sDxgBqcSIpj5kTuRi31xF/p6uLnhPtZNSCKhOiGLDb7e3qLdCuUAyVLA4efNPCi8ibfXOIL8popPd5b7z+Bi0kZ2rPBnV7AvngYnHMbYCogdRp2BsaJ1vaNWtX7zaprqUAFlmW+G2/k19TDrFnzMgaggQuZO4+uoEE4nbSVdQPeHL8DFwV5U6czSwElsW7uEyUY3jAaDgOv4JmGv8K7lLVBqKI28Z+cWQuZ8SHriaq4f2k5WShxpByPJ2L+Z5DUL8DLo8RKD2R3qw4Yls4Ub9DgK27gIPWOiNijDjwDlVuzZsp5Z47WizXWUpcZTdiya6hPbuJ64irNxMeyMCMdvxnScxOSdxeT9vSez0M9XTNyBrZsilPHVUJqFIft7nnAiOZb1AV4kRweR/9Muio/FkBG/jOJrZxgafMGL7m4a6qqYNWWiMLQN4cHC9CsWMmaUNclJ8bwabFHm1sjU6O1soPBWGl/M9mKZ3xQORi3lXGIkv588IFavC0tdLXcupjLU20lm+kVCghfz+fxAsTXjhI4umHIyhVMakEuikesiDSl9tDE0GB83O/aGL+PK2R8ounGJ6pJ7mE5/S9Hxvdw+dQBT5i98l5xEWNhqvKdNJ/GrL4VlzIrxuOYuGrnQcrHVgleZ2BS2ksTYaFL2xZB54WdyMi9x60QC+ecPYrp8ku2Ra1SIzJ09h2NHvleBIYchO5WJo3mbhQXqQK5Pv8g8U3YGuTcyqCwrprjoDgU52VxOTSH9yD4uHE4gIS6WvOzfxDDfDqLxn0xU8SVDUYajPJCVytL7uh4zIJzf015PR6tYqeZq2poqsQhHDHQ18MfLVqWZzAFz3X8BW1SQiUbGtoRKumxfaipvlC9bxO2y6q62GhVxMnxlRXKa8h2p2b/BKmF52en8DbawW2uNJNL9AAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/db0cc00a9298e98232d6af37d31f630f/fdbb0/cat1_400.png",srcSet:"/static/db0cc00a9298e98232d6af37d31f630f/e22c9/cat1_400.png 75w,\n/static/db0cc00a9298e98232d6af37d31f630f/d3809/cat1_400.png 150w,\n/static/db0cc00a9298e98232d6af37d31f630f/fdbb0/cat1_400.png 300w,\n/static/db0cc00a9298e98232d6af37d31f630f/647de/cat1_400.png 400w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},162:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(35)),o=i(a(75)),l=i(a(76)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;var y=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},S=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+l+a+r+t+s+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},f,{onLoad:s,onError:c,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});v.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var E=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var i=t.critical||m&&(g||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,w=e.loading,L=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,A=(0,l.default)({opacity:L?1:0,transition:R?"opacity "+b+"ms":"none"},o),O="boolean"==typeof h?"lightgray":h,q={transitionDelay:b+"ms"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&q,o,f),I={title:t,alt:this.state.isVisible?"":a,style:x,className:p};if(g){var V=g;return d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),O&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&q)}),V.base64&&d.default.createElement(v,(0,l.default)({src:V.base64},I)),V.tracedSVG&&d.default.createElement(v,(0,l.default)({src:V.tracedSVG},I)),this.state.isVisible&&d.default.createElement("picture",null,V.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:V.srcSetWebp,sizes:V.sizes}),d.default.createElement(v,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,l.default)({alt:a,title:t,loading:w},V))}}))}if(m){var z=m,T=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},n);return"inherit"===n.display&&delete T.display,d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},O&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:O,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},R&&q)}),z.base64&&d.default.createElement(v,(0,l.default)({src:z.base64},I)),z.tracedSVG&&d.default.createElement(v,(0,l.default)({src:z.tracedSVG},I)),this.state.isVisible&&d.default.createElement("picture",null,z.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),d.default.createElement(v,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,l.default)({alt:a,title:t,loading:w},z))}}))}return null},t}(d.default.Component);E.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});E.propTypes={resolutions:w,sizes:L,fixed:w,fluid:L,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var R=E;t.default=R}}]);
//# sourceMappingURL=component---src-pages-index-js-21891eb37ef055adaaf1.js.map