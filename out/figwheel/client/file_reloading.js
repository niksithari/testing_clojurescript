// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27989__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27989__auto__){
return or__27989__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27989__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
var or__27989__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27989__auto____$1)){
return or__27989__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34840_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34840_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34841 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34842 = null;
var count__34843 = (0);
var i__34844 = (0);
while(true){
if((i__34844 < count__34843)){
var n = cljs.core._nth.call(null,chunk__34842,i__34844);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34845 = seq__34841;
var G__34846 = chunk__34842;
var G__34847 = count__34843;
var G__34848 = (i__34844 + (1));
seq__34841 = G__34845;
chunk__34842 = G__34846;
count__34843 = G__34847;
i__34844 = G__34848;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34841);
if(temp__4657__auto__){
var seq__34841__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34841__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__34841__$1);
var G__34849 = cljs.core.chunk_rest.call(null,seq__34841__$1);
var G__34850 = c__28828__auto__;
var G__34851 = cljs.core.count.call(null,c__28828__auto__);
var G__34852 = (0);
seq__34841 = G__34849;
chunk__34842 = G__34850;
count__34843 = G__34851;
i__34844 = G__34852;
continue;
} else {
var n = cljs.core.first.call(null,seq__34841__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34853 = cljs.core.next.call(null,seq__34841__$1);
var G__34854 = null;
var G__34855 = (0);
var G__34856 = (0);
seq__34841 = G__34853;
chunk__34842 = G__34854;
count__34843 = G__34855;
i__34844 = G__34856;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34866_34874 = cljs.core.seq.call(null,deps);
var chunk__34867_34875 = null;
var count__34868_34876 = (0);
var i__34869_34877 = (0);
while(true){
if((i__34869_34877 < count__34868_34876)){
var dep_34878 = cljs.core._nth.call(null,chunk__34867_34875,i__34869_34877);
topo_sort_helper_STAR_.call(null,dep_34878,(depth + (1)),state);

var G__34879 = seq__34866_34874;
var G__34880 = chunk__34867_34875;
var G__34881 = count__34868_34876;
var G__34882 = (i__34869_34877 + (1));
seq__34866_34874 = G__34879;
chunk__34867_34875 = G__34880;
count__34868_34876 = G__34881;
i__34869_34877 = G__34882;
continue;
} else {
var temp__4657__auto___34883 = cljs.core.seq.call(null,seq__34866_34874);
if(temp__4657__auto___34883){
var seq__34866_34884__$1 = temp__4657__auto___34883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34866_34884__$1)){
var c__28828__auto___34885 = cljs.core.chunk_first.call(null,seq__34866_34884__$1);
var G__34886 = cljs.core.chunk_rest.call(null,seq__34866_34884__$1);
var G__34887 = c__28828__auto___34885;
var G__34888 = cljs.core.count.call(null,c__28828__auto___34885);
var G__34889 = (0);
seq__34866_34874 = G__34886;
chunk__34867_34875 = G__34887;
count__34868_34876 = G__34888;
i__34869_34877 = G__34889;
continue;
} else {
var dep_34890 = cljs.core.first.call(null,seq__34866_34884__$1);
topo_sort_helper_STAR_.call(null,dep_34890,(depth + (1)),state);

var G__34891 = cljs.core.next.call(null,seq__34866_34884__$1);
var G__34892 = null;
var G__34893 = (0);
var G__34894 = (0);
seq__34866_34874 = G__34891;
chunk__34867_34875 = G__34892;
count__34868_34876 = G__34893;
i__34869_34877 = G__34894;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34870){
var vec__34871 = p__34870;
var seq__34872 = cljs.core.seq.call(null,vec__34871);
var first__34873 = cljs.core.first.call(null,seq__34872);
var seq__34872__$1 = cljs.core.next.call(null,seq__34872);
var x = first__34873;
var xs = seq__34872__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34871,seq__34872,first__34873,seq__34872__$1,x,xs,get_deps__$1){
return (function (p1__34857_SHARP_){
return clojure.set.difference.call(null,p1__34857_SHARP_,x);
});})(vec__34871,seq__34872,first__34873,seq__34872__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34895 = cljs.core.seq.call(null,provides);
var chunk__34896 = null;
var count__34897 = (0);
var i__34898 = (0);
while(true){
if((i__34898 < count__34897)){
var prov = cljs.core._nth.call(null,chunk__34896,i__34898);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34899_34907 = cljs.core.seq.call(null,requires);
var chunk__34900_34908 = null;
var count__34901_34909 = (0);
var i__34902_34910 = (0);
while(true){
if((i__34902_34910 < count__34901_34909)){
var req_34911 = cljs.core._nth.call(null,chunk__34900_34908,i__34902_34910);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34911,prov);

var G__34912 = seq__34899_34907;
var G__34913 = chunk__34900_34908;
var G__34914 = count__34901_34909;
var G__34915 = (i__34902_34910 + (1));
seq__34899_34907 = G__34912;
chunk__34900_34908 = G__34913;
count__34901_34909 = G__34914;
i__34902_34910 = G__34915;
continue;
} else {
var temp__4657__auto___34916 = cljs.core.seq.call(null,seq__34899_34907);
if(temp__4657__auto___34916){
var seq__34899_34917__$1 = temp__4657__auto___34916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34899_34917__$1)){
var c__28828__auto___34918 = cljs.core.chunk_first.call(null,seq__34899_34917__$1);
var G__34919 = cljs.core.chunk_rest.call(null,seq__34899_34917__$1);
var G__34920 = c__28828__auto___34918;
var G__34921 = cljs.core.count.call(null,c__28828__auto___34918);
var G__34922 = (0);
seq__34899_34907 = G__34919;
chunk__34900_34908 = G__34920;
count__34901_34909 = G__34921;
i__34902_34910 = G__34922;
continue;
} else {
var req_34923 = cljs.core.first.call(null,seq__34899_34917__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34923,prov);

var G__34924 = cljs.core.next.call(null,seq__34899_34917__$1);
var G__34925 = null;
var G__34926 = (0);
var G__34927 = (0);
seq__34899_34907 = G__34924;
chunk__34900_34908 = G__34925;
count__34901_34909 = G__34926;
i__34902_34910 = G__34927;
continue;
}
} else {
}
}
break;
}

var G__34928 = seq__34895;
var G__34929 = chunk__34896;
var G__34930 = count__34897;
var G__34931 = (i__34898 + (1));
seq__34895 = G__34928;
chunk__34896 = G__34929;
count__34897 = G__34930;
i__34898 = G__34931;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34895);
if(temp__4657__auto__){
var seq__34895__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34895__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__34895__$1);
var G__34932 = cljs.core.chunk_rest.call(null,seq__34895__$1);
var G__34933 = c__28828__auto__;
var G__34934 = cljs.core.count.call(null,c__28828__auto__);
var G__34935 = (0);
seq__34895 = G__34932;
chunk__34896 = G__34933;
count__34897 = G__34934;
i__34898 = G__34935;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34895__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34903_34936 = cljs.core.seq.call(null,requires);
var chunk__34904_34937 = null;
var count__34905_34938 = (0);
var i__34906_34939 = (0);
while(true){
if((i__34906_34939 < count__34905_34938)){
var req_34940 = cljs.core._nth.call(null,chunk__34904_34937,i__34906_34939);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34940,prov);

var G__34941 = seq__34903_34936;
var G__34942 = chunk__34904_34937;
var G__34943 = count__34905_34938;
var G__34944 = (i__34906_34939 + (1));
seq__34903_34936 = G__34941;
chunk__34904_34937 = G__34942;
count__34905_34938 = G__34943;
i__34906_34939 = G__34944;
continue;
} else {
var temp__4657__auto___34945__$1 = cljs.core.seq.call(null,seq__34903_34936);
if(temp__4657__auto___34945__$1){
var seq__34903_34946__$1 = temp__4657__auto___34945__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34903_34946__$1)){
var c__28828__auto___34947 = cljs.core.chunk_first.call(null,seq__34903_34946__$1);
var G__34948 = cljs.core.chunk_rest.call(null,seq__34903_34946__$1);
var G__34949 = c__28828__auto___34947;
var G__34950 = cljs.core.count.call(null,c__28828__auto___34947);
var G__34951 = (0);
seq__34903_34936 = G__34948;
chunk__34904_34937 = G__34949;
count__34905_34938 = G__34950;
i__34906_34939 = G__34951;
continue;
} else {
var req_34952 = cljs.core.first.call(null,seq__34903_34946__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34952,prov);

var G__34953 = cljs.core.next.call(null,seq__34903_34946__$1);
var G__34954 = null;
var G__34955 = (0);
var G__34956 = (0);
seq__34903_34936 = G__34953;
chunk__34904_34937 = G__34954;
count__34905_34938 = G__34955;
i__34906_34939 = G__34956;
continue;
}
} else {
}
}
break;
}

var G__34957 = cljs.core.next.call(null,seq__34895__$1);
var G__34958 = null;
var G__34959 = (0);
var G__34960 = (0);
seq__34895 = G__34957;
chunk__34896 = G__34958;
count__34897 = G__34959;
i__34898 = G__34960;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34961_34965 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34962_34966 = null;
var count__34963_34967 = (0);
var i__34964_34968 = (0);
while(true){
if((i__34964_34968 < count__34963_34967)){
var ns_34969 = cljs.core._nth.call(null,chunk__34962_34966,i__34964_34968);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34969);

var G__34970 = seq__34961_34965;
var G__34971 = chunk__34962_34966;
var G__34972 = count__34963_34967;
var G__34973 = (i__34964_34968 + (1));
seq__34961_34965 = G__34970;
chunk__34962_34966 = G__34971;
count__34963_34967 = G__34972;
i__34964_34968 = G__34973;
continue;
} else {
var temp__4657__auto___34974 = cljs.core.seq.call(null,seq__34961_34965);
if(temp__4657__auto___34974){
var seq__34961_34975__$1 = temp__4657__auto___34974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34961_34975__$1)){
var c__28828__auto___34976 = cljs.core.chunk_first.call(null,seq__34961_34975__$1);
var G__34977 = cljs.core.chunk_rest.call(null,seq__34961_34975__$1);
var G__34978 = c__28828__auto___34976;
var G__34979 = cljs.core.count.call(null,c__28828__auto___34976);
var G__34980 = (0);
seq__34961_34965 = G__34977;
chunk__34962_34966 = G__34978;
count__34963_34967 = G__34979;
i__34964_34968 = G__34980;
continue;
} else {
var ns_34981 = cljs.core.first.call(null,seq__34961_34975__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34981);

var G__34982 = cljs.core.next.call(null,seq__34961_34975__$1);
var G__34983 = null;
var G__34984 = (0);
var G__34985 = (0);
seq__34961_34965 = G__34982;
chunk__34962_34966 = G__34983;
count__34963_34967 = G__34984;
i__34964_34968 = G__34985;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27989__auto__ = goog.require__;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34986__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34987__i = 0, G__34987__a = new Array(arguments.length -  0);
while (G__34987__i < G__34987__a.length) {G__34987__a[G__34987__i] = arguments[G__34987__i + 0]; ++G__34987__i;}
  args = new cljs.core.IndexedSeq(G__34987__a,0,null);
} 
return G__34986__delegate.call(this,args);};
G__34986.cljs$lang$maxFixedArity = 0;
G__34986.cljs$lang$applyTo = (function (arglist__34988){
var args = cljs.core.seq(arglist__34988);
return G__34986__delegate(args);
});
G__34986.cljs$core$IFn$_invoke$arity$variadic = G__34986__delegate;
return G__34986;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__34989_SHARP_,p2__34990_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34989_SHARP_)].join('')),p2__34990_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__34991_SHARP_,p2__34992_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34991_SHARP_)].join(''),p2__34992_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34993 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34993.addCallback(((function (G__34993){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34993))
);

G__34993.addErrback(((function (G__34993){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34993))
);

return G__34993;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34994 = cljs.core._EQ_;
var expr__34995 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34994.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34995))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34994,expr__34995){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34994,expr__34995))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34994,expr__34995){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34997){if((e34997 instanceof Error)){
var e = e34997;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34997;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34994,expr__34995))
} else {
if(cljs.core.truth_(pred__34994.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34995))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34994.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__34995))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34994.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34995))){
return ((function (pred__34994,expr__34995){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34998){if((e34998 instanceof Error)){
var e = e34998;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34998;

}
}})());
});
;})(pred__34994,expr__34995))
} else {
return ((function (pred__34994,expr__34995){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34994,expr__34995))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34999,callback){
var map__35000 = p__34999;
var map__35000__$1 = ((((!((map__35000 == null)))?((((map__35000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35000):map__35000);
var file_msg = map__35000__$1;
var request_url = cljs.core.get.call(null,map__35000__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35000,map__35000__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35000,map__35000__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto__){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto__){
return (function (state_35024){
var state_val_35025 = (state_35024[(1)]);
if((state_val_35025 === (7))){
var inst_35020 = (state_35024[(2)]);
var state_35024__$1 = state_35024;
var statearr_35026_35043 = state_35024__$1;
(statearr_35026_35043[(2)] = inst_35020);

(statearr_35026_35043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35025 === (1))){
var state_35024__$1 = state_35024;
var statearr_35027_35044 = state_35024__$1;
(statearr_35027_35044[(2)] = null);

(statearr_35027_35044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35025 === (4))){
var inst_35004 = (state_35024[(7)]);
var inst_35004__$1 = (state_35024[(2)]);
var state_35024__$1 = (function (){var statearr_35028 = state_35024;
(statearr_35028[(7)] = inst_35004__$1);

return statearr_35028;
})();
if(cljs.core.truth_(inst_35004__$1)){
var statearr_35029_35045 = state_35024__$1;
(statearr_35029_35045[(1)] = (5));

} else {
var statearr_35030_35046 = state_35024__$1;
(statearr_35030_35046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35025 === (6))){
var state_35024__$1 = state_35024;
var statearr_35031_35047 = state_35024__$1;
(statearr_35031_35047[(2)] = null);

(statearr_35031_35047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35025 === (3))){
var inst_35022 = (state_35024[(2)]);
var state_35024__$1 = state_35024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35024__$1,inst_35022);
} else {
if((state_val_35025 === (2))){
var state_35024__$1 = state_35024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35024__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35025 === (11))){
var inst_35016 = (state_35024[(2)]);
var state_35024__$1 = (function (){var statearr_35032 = state_35024;
(statearr_35032[(8)] = inst_35016);

return statearr_35032;
})();
var statearr_35033_35048 = state_35024__$1;
(statearr_35033_35048[(2)] = null);

(statearr_35033_35048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35025 === (9))){
var inst_35008 = (state_35024[(9)]);
var inst_35010 = (state_35024[(10)]);
var inst_35012 = inst_35010.call(null,inst_35008);
var state_35024__$1 = state_35024;
var statearr_35034_35049 = state_35024__$1;
(statearr_35034_35049[(2)] = inst_35012);

(statearr_35034_35049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35025 === (5))){
var inst_35004 = (state_35024[(7)]);
var inst_35006 = figwheel.client.file_reloading.blocking_load.call(null,inst_35004);
var state_35024__$1 = state_35024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35024__$1,(8),inst_35006);
} else {
if((state_val_35025 === (10))){
var inst_35008 = (state_35024[(9)]);
var inst_35014 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35008);
var state_35024__$1 = state_35024;
var statearr_35035_35050 = state_35024__$1;
(statearr_35035_35050[(2)] = inst_35014);

(statearr_35035_35050[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35025 === (8))){
var inst_35004 = (state_35024[(7)]);
var inst_35010 = (state_35024[(10)]);
var inst_35008 = (state_35024[(2)]);
var inst_35009 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35010__$1 = cljs.core.get.call(null,inst_35009,inst_35004);
var state_35024__$1 = (function (){var statearr_35036 = state_35024;
(statearr_35036[(9)] = inst_35008);

(statearr_35036[(10)] = inst_35010__$1);

return statearr_35036;
})();
if(cljs.core.truth_(inst_35010__$1)){
var statearr_35037_35051 = state_35024__$1;
(statearr_35037_35051[(1)] = (9));

} else {
var statearr_35038_35052 = state_35024__$1;
(statearr_35038_35052[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto__))
;
return ((function (switch__31582__auto__,c__31670__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31583__auto__ = null;
var figwheel$client$file_reloading$state_machine__31583__auto____0 = (function (){
var statearr_35039 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35039[(0)] = figwheel$client$file_reloading$state_machine__31583__auto__);

(statearr_35039[(1)] = (1));

return statearr_35039;
});
var figwheel$client$file_reloading$state_machine__31583__auto____1 = (function (state_35024){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_35024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e35040){if((e35040 instanceof Object)){
var ex__31586__auto__ = e35040;
var statearr_35041_35053 = state_35024;
(statearr_35041_35053[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35054 = state_35024;
state_35024 = G__35054;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31583__auto__ = function(state_35024){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31583__auto____1.call(this,state_35024);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31583__auto____0;
figwheel$client$file_reloading$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31583__auto____1;
return figwheel$client$file_reloading$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto__))
})();
var state__31672__auto__ = (function (){var statearr_35042 = f__31671__auto__.call(null);
(statearr_35042[(6)] = c__31670__auto__);

return statearr_35042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto__))
);

return c__31670__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35055,callback){
var map__35056 = p__35055;
var map__35056__$1 = ((((!((map__35056 == null)))?((((map__35056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35056):map__35056);
var file_msg = map__35056__$1;
var namespace = cljs.core.get.call(null,map__35056__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35056,map__35056__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35056,map__35056__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35058){
var map__35059 = p__35058;
var map__35059__$1 = ((((!((map__35059 == null)))?((((map__35059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35059):map__35059);
var file_msg = map__35059__$1;
var namespace = cljs.core.get.call(null,map__35059__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35061){
var map__35062 = p__35061;
var map__35062__$1 = ((((!((map__35062 == null)))?((((map__35062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35062):map__35062);
var file_msg = map__35062__$1;
var namespace = cljs.core.get.call(null,map__35062__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27977__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27977__auto__){
var or__27989__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
var or__27989__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27989__auto____$1)){
return or__27989__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27977__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35064,callback){
var map__35065 = p__35064;
var map__35065__$1 = ((((!((map__35065 == null)))?((((map__35065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35065):map__35065);
var file_msg = map__35065__$1;
var request_url = cljs.core.get.call(null,map__35065__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35065__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31670__auto___35115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto___35115,out){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto___35115,out){
return (function (state_35100){
var state_val_35101 = (state_35100[(1)]);
if((state_val_35101 === (1))){
var inst_35074 = cljs.core.seq.call(null,files);
var inst_35075 = cljs.core.first.call(null,inst_35074);
var inst_35076 = cljs.core.next.call(null,inst_35074);
var inst_35077 = files;
var state_35100__$1 = (function (){var statearr_35102 = state_35100;
(statearr_35102[(7)] = inst_35076);

(statearr_35102[(8)] = inst_35077);

(statearr_35102[(9)] = inst_35075);

return statearr_35102;
})();
var statearr_35103_35116 = state_35100__$1;
(statearr_35103_35116[(2)] = null);

(statearr_35103_35116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (2))){
var inst_35083 = (state_35100[(10)]);
var inst_35077 = (state_35100[(8)]);
var inst_35082 = cljs.core.seq.call(null,inst_35077);
var inst_35083__$1 = cljs.core.first.call(null,inst_35082);
var inst_35084 = cljs.core.next.call(null,inst_35082);
var inst_35085 = (inst_35083__$1 == null);
var inst_35086 = cljs.core.not.call(null,inst_35085);
var state_35100__$1 = (function (){var statearr_35104 = state_35100;
(statearr_35104[(10)] = inst_35083__$1);

(statearr_35104[(11)] = inst_35084);

return statearr_35104;
})();
if(inst_35086){
var statearr_35105_35117 = state_35100__$1;
(statearr_35105_35117[(1)] = (4));

} else {
var statearr_35106_35118 = state_35100__$1;
(statearr_35106_35118[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (3))){
var inst_35098 = (state_35100[(2)]);
var state_35100__$1 = state_35100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35100__$1,inst_35098);
} else {
if((state_val_35101 === (4))){
var inst_35083 = (state_35100[(10)]);
var inst_35088 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35083);
var state_35100__$1 = state_35100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35100__$1,(7),inst_35088);
} else {
if((state_val_35101 === (5))){
var inst_35094 = cljs.core.async.close_BANG_.call(null,out);
var state_35100__$1 = state_35100;
var statearr_35107_35119 = state_35100__$1;
(statearr_35107_35119[(2)] = inst_35094);

(statearr_35107_35119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (6))){
var inst_35096 = (state_35100[(2)]);
var state_35100__$1 = state_35100;
var statearr_35108_35120 = state_35100__$1;
(statearr_35108_35120[(2)] = inst_35096);

(statearr_35108_35120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (7))){
var inst_35084 = (state_35100[(11)]);
var inst_35090 = (state_35100[(2)]);
var inst_35091 = cljs.core.async.put_BANG_.call(null,out,inst_35090);
var inst_35077 = inst_35084;
var state_35100__$1 = (function (){var statearr_35109 = state_35100;
(statearr_35109[(8)] = inst_35077);

(statearr_35109[(12)] = inst_35091);

return statearr_35109;
})();
var statearr_35110_35121 = state_35100__$1;
(statearr_35110_35121[(2)] = null);

(statearr_35110_35121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__31670__auto___35115,out))
;
return ((function (switch__31582__auto__,c__31670__auto___35115,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto____0 = (function (){
var statearr_35111 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35111[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto__);

(statearr_35111[(1)] = (1));

return statearr_35111;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto____1 = (function (state_35100){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_35100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e35112){if((e35112 instanceof Object)){
var ex__31586__auto__ = e35112;
var statearr_35113_35122 = state_35100;
(statearr_35113_35122[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35123 = state_35100;
state_35100 = G__35123;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto__ = function(state_35100){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto____1.call(this,state_35100);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto___35115,out))
})();
var state__31672__auto__ = (function (){var statearr_35114 = f__31671__auto__.call(null);
(statearr_35114[(6)] = c__31670__auto___35115);

return statearr_35114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto___35115,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35124,opts){
var map__35125 = p__35124;
var map__35125__$1 = ((((!((map__35125 == null)))?((((map__35125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35125):map__35125);
var eval_body = cljs.core.get.call(null,map__35125__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35125__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27977__auto__ = eval_body;
if(cljs.core.truth_(and__27977__auto__)){
return typeof eval_body === 'string';
} else {
return and__27977__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35127){var e = e35127;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35128_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35128_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35129){
var vec__35130 = p__35129;
var k = cljs.core.nth.call(null,vec__35130,(0),null);
var v = cljs.core.nth.call(null,vec__35130,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35133){
var vec__35134 = p__35133;
var k = cljs.core.nth.call(null,vec__35134,(0),null);
var v = cljs.core.nth.call(null,vec__35134,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35140,p__35141){
var map__35142 = p__35140;
var map__35142__$1 = ((((!((map__35142 == null)))?((((map__35142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35142):map__35142);
var opts = map__35142__$1;
var before_jsload = cljs.core.get.call(null,map__35142__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35142__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35142__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35143 = p__35141;
var map__35143__$1 = ((((!((map__35143 == null)))?((((map__35143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35143):map__35143);
var msg = map__35143__$1;
var files = cljs.core.get.call(null,map__35143__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35143__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35143__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35297){
var state_val_35298 = (state_35297[(1)]);
if((state_val_35298 === (7))){
var inst_35159 = (state_35297[(7)]);
var inst_35157 = (state_35297[(8)]);
var inst_35160 = (state_35297[(9)]);
var inst_35158 = (state_35297[(10)]);
var inst_35165 = cljs.core._nth.call(null,inst_35158,inst_35160);
var inst_35166 = figwheel.client.file_reloading.eval_body.call(null,inst_35165,opts);
var inst_35167 = (inst_35160 + (1));
var tmp35299 = inst_35159;
var tmp35300 = inst_35157;
var tmp35301 = inst_35158;
var inst_35157__$1 = tmp35300;
var inst_35158__$1 = tmp35301;
var inst_35159__$1 = tmp35299;
var inst_35160__$1 = inst_35167;
var state_35297__$1 = (function (){var statearr_35302 = state_35297;
(statearr_35302[(7)] = inst_35159__$1);

(statearr_35302[(8)] = inst_35157__$1);

(statearr_35302[(9)] = inst_35160__$1);

(statearr_35302[(11)] = inst_35166);

(statearr_35302[(10)] = inst_35158__$1);

return statearr_35302;
})();
var statearr_35303_35386 = state_35297__$1;
(statearr_35303_35386[(2)] = null);

(statearr_35303_35386[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (20))){
var inst_35200 = (state_35297[(12)]);
var inst_35208 = figwheel.client.file_reloading.sort_files.call(null,inst_35200);
var state_35297__$1 = state_35297;
var statearr_35304_35387 = state_35297__$1;
(statearr_35304_35387[(2)] = inst_35208);

(statearr_35304_35387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (27))){
var state_35297__$1 = state_35297;
var statearr_35305_35388 = state_35297__$1;
(statearr_35305_35388[(2)] = null);

(statearr_35305_35388[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (1))){
var inst_35149 = (state_35297[(13)]);
var inst_35146 = before_jsload.call(null,files);
var inst_35147 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35148 = (function (){return ((function (inst_35149,inst_35146,inst_35147,state_val_35298,c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35137_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35137_SHARP_);
});
;})(inst_35149,inst_35146,inst_35147,state_val_35298,c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35149__$1 = cljs.core.filter.call(null,inst_35148,files);
var inst_35150 = cljs.core.not_empty.call(null,inst_35149__$1);
var state_35297__$1 = (function (){var statearr_35306 = state_35297;
(statearr_35306[(13)] = inst_35149__$1);

(statearr_35306[(14)] = inst_35146);

(statearr_35306[(15)] = inst_35147);

return statearr_35306;
})();
if(cljs.core.truth_(inst_35150)){
var statearr_35307_35389 = state_35297__$1;
(statearr_35307_35389[(1)] = (2));

} else {
var statearr_35308_35390 = state_35297__$1;
(statearr_35308_35390[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (24))){
var state_35297__$1 = state_35297;
var statearr_35309_35391 = state_35297__$1;
(statearr_35309_35391[(2)] = null);

(statearr_35309_35391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (39))){
var inst_35250 = (state_35297[(16)]);
var state_35297__$1 = state_35297;
var statearr_35310_35392 = state_35297__$1;
(statearr_35310_35392[(2)] = inst_35250);

(statearr_35310_35392[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (46))){
var inst_35292 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
var statearr_35311_35393 = state_35297__$1;
(statearr_35311_35393[(2)] = inst_35292);

(statearr_35311_35393[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (4))){
var inst_35194 = (state_35297[(2)]);
var inst_35195 = cljs.core.List.EMPTY;
var inst_35196 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35195);
var inst_35197 = (function (){return ((function (inst_35194,inst_35195,inst_35196,state_val_35298,c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35138_SHARP_){
var and__27977__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35138_SHARP_);
if(cljs.core.truth_(and__27977__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35138_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35138_SHARP_)));
} else {
return and__27977__auto__;
}
});
;})(inst_35194,inst_35195,inst_35196,state_val_35298,c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35198 = cljs.core.filter.call(null,inst_35197,files);
var inst_35199 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35200 = cljs.core.concat.call(null,inst_35198,inst_35199);
var state_35297__$1 = (function (){var statearr_35312 = state_35297;
(statearr_35312[(17)] = inst_35196);

(statearr_35312[(12)] = inst_35200);

(statearr_35312[(18)] = inst_35194);

return statearr_35312;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35313_35394 = state_35297__$1;
(statearr_35313_35394[(1)] = (16));

} else {
var statearr_35314_35395 = state_35297__$1;
(statearr_35314_35395[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (15))){
var inst_35184 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
var statearr_35315_35396 = state_35297__$1;
(statearr_35315_35396[(2)] = inst_35184);

(statearr_35315_35396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (21))){
var inst_35210 = (state_35297[(19)]);
var inst_35210__$1 = (state_35297[(2)]);
var inst_35211 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35210__$1);
var state_35297__$1 = (function (){var statearr_35316 = state_35297;
(statearr_35316[(19)] = inst_35210__$1);

return statearr_35316;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35297__$1,(22),inst_35211);
} else {
if((state_val_35298 === (31))){
var inst_35295 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35297__$1,inst_35295);
} else {
if((state_val_35298 === (32))){
var inst_35250 = (state_35297[(16)]);
var inst_35255 = inst_35250.cljs$lang$protocol_mask$partition0$;
var inst_35256 = (inst_35255 & (64));
var inst_35257 = inst_35250.cljs$core$ISeq$;
var inst_35258 = (cljs.core.PROTOCOL_SENTINEL === inst_35257);
var inst_35259 = (inst_35256) || (inst_35258);
var state_35297__$1 = state_35297;
if(cljs.core.truth_(inst_35259)){
var statearr_35317_35397 = state_35297__$1;
(statearr_35317_35397[(1)] = (35));

} else {
var statearr_35318_35398 = state_35297__$1;
(statearr_35318_35398[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (40))){
var inst_35272 = (state_35297[(20)]);
var inst_35271 = (state_35297[(2)]);
var inst_35272__$1 = cljs.core.get.call(null,inst_35271,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35273 = cljs.core.get.call(null,inst_35271,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35274 = cljs.core.not_empty.call(null,inst_35272__$1);
var state_35297__$1 = (function (){var statearr_35319 = state_35297;
(statearr_35319[(21)] = inst_35273);

(statearr_35319[(20)] = inst_35272__$1);

return statearr_35319;
})();
if(cljs.core.truth_(inst_35274)){
var statearr_35320_35399 = state_35297__$1;
(statearr_35320_35399[(1)] = (41));

} else {
var statearr_35321_35400 = state_35297__$1;
(statearr_35321_35400[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (33))){
var state_35297__$1 = state_35297;
var statearr_35322_35401 = state_35297__$1;
(statearr_35322_35401[(2)] = false);

(statearr_35322_35401[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (13))){
var inst_35170 = (state_35297[(22)]);
var inst_35174 = cljs.core.chunk_first.call(null,inst_35170);
var inst_35175 = cljs.core.chunk_rest.call(null,inst_35170);
var inst_35176 = cljs.core.count.call(null,inst_35174);
var inst_35157 = inst_35175;
var inst_35158 = inst_35174;
var inst_35159 = inst_35176;
var inst_35160 = (0);
var state_35297__$1 = (function (){var statearr_35323 = state_35297;
(statearr_35323[(7)] = inst_35159);

(statearr_35323[(8)] = inst_35157);

(statearr_35323[(9)] = inst_35160);

(statearr_35323[(10)] = inst_35158);

return statearr_35323;
})();
var statearr_35324_35402 = state_35297__$1;
(statearr_35324_35402[(2)] = null);

(statearr_35324_35402[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (22))){
var inst_35210 = (state_35297[(19)]);
var inst_35213 = (state_35297[(23)]);
var inst_35218 = (state_35297[(24)]);
var inst_35214 = (state_35297[(25)]);
var inst_35213__$1 = (state_35297[(2)]);
var inst_35214__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35213__$1);
var inst_35215 = (function (){var all_files = inst_35210;
var res_SINGLEQUOTE_ = inst_35213__$1;
var res = inst_35214__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35210,inst_35213,inst_35218,inst_35214,inst_35213__$1,inst_35214__$1,state_val_35298,c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35139_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35139_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35210,inst_35213,inst_35218,inst_35214,inst_35213__$1,inst_35214__$1,state_val_35298,c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35216 = cljs.core.filter.call(null,inst_35215,inst_35213__$1);
var inst_35217 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35218__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35217);
var inst_35219 = cljs.core.not_empty.call(null,inst_35218__$1);
var state_35297__$1 = (function (){var statearr_35325 = state_35297;
(statearr_35325[(23)] = inst_35213__$1);

(statearr_35325[(24)] = inst_35218__$1);

(statearr_35325[(25)] = inst_35214__$1);

(statearr_35325[(26)] = inst_35216);

return statearr_35325;
})();
if(cljs.core.truth_(inst_35219)){
var statearr_35326_35403 = state_35297__$1;
(statearr_35326_35403[(1)] = (23));

} else {
var statearr_35327_35404 = state_35297__$1;
(statearr_35327_35404[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (36))){
var state_35297__$1 = state_35297;
var statearr_35328_35405 = state_35297__$1;
(statearr_35328_35405[(2)] = false);

(statearr_35328_35405[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (41))){
var inst_35272 = (state_35297[(20)]);
var inst_35276 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35277 = cljs.core.map.call(null,inst_35276,inst_35272);
var inst_35278 = cljs.core.pr_str.call(null,inst_35277);
var inst_35279 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35278)].join('');
var inst_35280 = figwheel.client.utils.log.call(null,inst_35279);
var state_35297__$1 = state_35297;
var statearr_35329_35406 = state_35297__$1;
(statearr_35329_35406[(2)] = inst_35280);

(statearr_35329_35406[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (43))){
var inst_35273 = (state_35297[(21)]);
var inst_35283 = (state_35297[(2)]);
var inst_35284 = cljs.core.not_empty.call(null,inst_35273);
var state_35297__$1 = (function (){var statearr_35330 = state_35297;
(statearr_35330[(27)] = inst_35283);

return statearr_35330;
})();
if(cljs.core.truth_(inst_35284)){
var statearr_35331_35407 = state_35297__$1;
(statearr_35331_35407[(1)] = (44));

} else {
var statearr_35332_35408 = state_35297__$1;
(statearr_35332_35408[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (29))){
var inst_35250 = (state_35297[(16)]);
var inst_35210 = (state_35297[(19)]);
var inst_35213 = (state_35297[(23)]);
var inst_35218 = (state_35297[(24)]);
var inst_35214 = (state_35297[(25)]);
var inst_35216 = (state_35297[(26)]);
var inst_35246 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35249 = (function (){var all_files = inst_35210;
var res_SINGLEQUOTE_ = inst_35213;
var res = inst_35214;
var files_not_loaded = inst_35216;
var dependencies_that_loaded = inst_35218;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35250,inst_35210,inst_35213,inst_35218,inst_35214,inst_35216,inst_35246,state_val_35298,c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35248){
var map__35333 = p__35248;
var map__35333__$1 = ((((!((map__35333 == null)))?((((map__35333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35333):map__35333);
var namespace = cljs.core.get.call(null,map__35333__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35250,inst_35210,inst_35213,inst_35218,inst_35214,inst_35216,inst_35246,state_val_35298,c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35250__$1 = cljs.core.group_by.call(null,inst_35249,inst_35216);
var inst_35252 = (inst_35250__$1 == null);
var inst_35253 = cljs.core.not.call(null,inst_35252);
var state_35297__$1 = (function (){var statearr_35335 = state_35297;
(statearr_35335[(16)] = inst_35250__$1);

(statearr_35335[(28)] = inst_35246);

return statearr_35335;
})();
if(inst_35253){
var statearr_35336_35409 = state_35297__$1;
(statearr_35336_35409[(1)] = (32));

} else {
var statearr_35337_35410 = state_35297__$1;
(statearr_35337_35410[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (44))){
var inst_35273 = (state_35297[(21)]);
var inst_35286 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35273);
var inst_35287 = cljs.core.pr_str.call(null,inst_35286);
var inst_35288 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35287)].join('');
var inst_35289 = figwheel.client.utils.log.call(null,inst_35288);
var state_35297__$1 = state_35297;
var statearr_35338_35411 = state_35297__$1;
(statearr_35338_35411[(2)] = inst_35289);

(statearr_35338_35411[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (6))){
var inst_35191 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
var statearr_35339_35412 = state_35297__$1;
(statearr_35339_35412[(2)] = inst_35191);

(statearr_35339_35412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (28))){
var inst_35216 = (state_35297[(26)]);
var inst_35243 = (state_35297[(2)]);
var inst_35244 = cljs.core.not_empty.call(null,inst_35216);
var state_35297__$1 = (function (){var statearr_35340 = state_35297;
(statearr_35340[(29)] = inst_35243);

return statearr_35340;
})();
if(cljs.core.truth_(inst_35244)){
var statearr_35341_35413 = state_35297__$1;
(statearr_35341_35413[(1)] = (29));

} else {
var statearr_35342_35414 = state_35297__$1;
(statearr_35342_35414[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (25))){
var inst_35214 = (state_35297[(25)]);
var inst_35230 = (state_35297[(2)]);
var inst_35231 = cljs.core.not_empty.call(null,inst_35214);
var state_35297__$1 = (function (){var statearr_35343 = state_35297;
(statearr_35343[(30)] = inst_35230);

return statearr_35343;
})();
if(cljs.core.truth_(inst_35231)){
var statearr_35344_35415 = state_35297__$1;
(statearr_35344_35415[(1)] = (26));

} else {
var statearr_35345_35416 = state_35297__$1;
(statearr_35345_35416[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (34))){
var inst_35266 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
if(cljs.core.truth_(inst_35266)){
var statearr_35346_35417 = state_35297__$1;
(statearr_35346_35417[(1)] = (38));

} else {
var statearr_35347_35418 = state_35297__$1;
(statearr_35347_35418[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (17))){
var state_35297__$1 = state_35297;
var statearr_35348_35419 = state_35297__$1;
(statearr_35348_35419[(2)] = recompile_dependents);

(statearr_35348_35419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (3))){
var state_35297__$1 = state_35297;
var statearr_35349_35420 = state_35297__$1;
(statearr_35349_35420[(2)] = null);

(statearr_35349_35420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (12))){
var inst_35187 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
var statearr_35350_35421 = state_35297__$1;
(statearr_35350_35421[(2)] = inst_35187);

(statearr_35350_35421[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (2))){
var inst_35149 = (state_35297[(13)]);
var inst_35156 = cljs.core.seq.call(null,inst_35149);
var inst_35157 = inst_35156;
var inst_35158 = null;
var inst_35159 = (0);
var inst_35160 = (0);
var state_35297__$1 = (function (){var statearr_35351 = state_35297;
(statearr_35351[(7)] = inst_35159);

(statearr_35351[(8)] = inst_35157);

(statearr_35351[(9)] = inst_35160);

(statearr_35351[(10)] = inst_35158);

return statearr_35351;
})();
var statearr_35352_35422 = state_35297__$1;
(statearr_35352_35422[(2)] = null);

(statearr_35352_35422[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (23))){
var inst_35210 = (state_35297[(19)]);
var inst_35213 = (state_35297[(23)]);
var inst_35218 = (state_35297[(24)]);
var inst_35214 = (state_35297[(25)]);
var inst_35216 = (state_35297[(26)]);
var inst_35221 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35223 = (function (){var all_files = inst_35210;
var res_SINGLEQUOTE_ = inst_35213;
var res = inst_35214;
var files_not_loaded = inst_35216;
var dependencies_that_loaded = inst_35218;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35210,inst_35213,inst_35218,inst_35214,inst_35216,inst_35221,state_val_35298,c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35222){
var map__35353 = p__35222;
var map__35353__$1 = ((((!((map__35353 == null)))?((((map__35353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35353):map__35353);
var request_url = cljs.core.get.call(null,map__35353__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35210,inst_35213,inst_35218,inst_35214,inst_35216,inst_35221,state_val_35298,c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35224 = cljs.core.reverse.call(null,inst_35218);
var inst_35225 = cljs.core.map.call(null,inst_35223,inst_35224);
var inst_35226 = cljs.core.pr_str.call(null,inst_35225);
var inst_35227 = figwheel.client.utils.log.call(null,inst_35226);
var state_35297__$1 = (function (){var statearr_35355 = state_35297;
(statearr_35355[(31)] = inst_35221);

return statearr_35355;
})();
var statearr_35356_35423 = state_35297__$1;
(statearr_35356_35423[(2)] = inst_35227);

(statearr_35356_35423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (35))){
var state_35297__$1 = state_35297;
var statearr_35357_35424 = state_35297__$1;
(statearr_35357_35424[(2)] = true);

(statearr_35357_35424[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (19))){
var inst_35200 = (state_35297[(12)]);
var inst_35206 = figwheel.client.file_reloading.expand_files.call(null,inst_35200);
var state_35297__$1 = state_35297;
var statearr_35358_35425 = state_35297__$1;
(statearr_35358_35425[(2)] = inst_35206);

(statearr_35358_35425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (11))){
var state_35297__$1 = state_35297;
var statearr_35359_35426 = state_35297__$1;
(statearr_35359_35426[(2)] = null);

(statearr_35359_35426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (9))){
var inst_35189 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
var statearr_35360_35427 = state_35297__$1;
(statearr_35360_35427[(2)] = inst_35189);

(statearr_35360_35427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (5))){
var inst_35159 = (state_35297[(7)]);
var inst_35160 = (state_35297[(9)]);
var inst_35162 = (inst_35160 < inst_35159);
var inst_35163 = inst_35162;
var state_35297__$1 = state_35297;
if(cljs.core.truth_(inst_35163)){
var statearr_35361_35428 = state_35297__$1;
(statearr_35361_35428[(1)] = (7));

} else {
var statearr_35362_35429 = state_35297__$1;
(statearr_35362_35429[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (14))){
var inst_35170 = (state_35297[(22)]);
var inst_35179 = cljs.core.first.call(null,inst_35170);
var inst_35180 = figwheel.client.file_reloading.eval_body.call(null,inst_35179,opts);
var inst_35181 = cljs.core.next.call(null,inst_35170);
var inst_35157 = inst_35181;
var inst_35158 = null;
var inst_35159 = (0);
var inst_35160 = (0);
var state_35297__$1 = (function (){var statearr_35363 = state_35297;
(statearr_35363[(7)] = inst_35159);

(statearr_35363[(32)] = inst_35180);

(statearr_35363[(8)] = inst_35157);

(statearr_35363[(9)] = inst_35160);

(statearr_35363[(10)] = inst_35158);

return statearr_35363;
})();
var statearr_35364_35430 = state_35297__$1;
(statearr_35364_35430[(2)] = null);

(statearr_35364_35430[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (45))){
var state_35297__$1 = state_35297;
var statearr_35365_35431 = state_35297__$1;
(statearr_35365_35431[(2)] = null);

(statearr_35365_35431[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (26))){
var inst_35210 = (state_35297[(19)]);
var inst_35213 = (state_35297[(23)]);
var inst_35218 = (state_35297[(24)]);
var inst_35214 = (state_35297[(25)]);
var inst_35216 = (state_35297[(26)]);
var inst_35233 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35235 = (function (){var all_files = inst_35210;
var res_SINGLEQUOTE_ = inst_35213;
var res = inst_35214;
var files_not_loaded = inst_35216;
var dependencies_that_loaded = inst_35218;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35210,inst_35213,inst_35218,inst_35214,inst_35216,inst_35233,state_val_35298,c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35234){
var map__35366 = p__35234;
var map__35366__$1 = ((((!((map__35366 == null)))?((((map__35366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35366):map__35366);
var namespace = cljs.core.get.call(null,map__35366__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35366__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35210,inst_35213,inst_35218,inst_35214,inst_35216,inst_35233,state_val_35298,c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35236 = cljs.core.map.call(null,inst_35235,inst_35214);
var inst_35237 = cljs.core.pr_str.call(null,inst_35236);
var inst_35238 = figwheel.client.utils.log.call(null,inst_35237);
var inst_35239 = (function (){var all_files = inst_35210;
var res_SINGLEQUOTE_ = inst_35213;
var res = inst_35214;
var files_not_loaded = inst_35216;
var dependencies_that_loaded = inst_35218;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35210,inst_35213,inst_35218,inst_35214,inst_35216,inst_35233,inst_35235,inst_35236,inst_35237,inst_35238,state_val_35298,c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35210,inst_35213,inst_35218,inst_35214,inst_35216,inst_35233,inst_35235,inst_35236,inst_35237,inst_35238,state_val_35298,c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35240 = setTimeout(inst_35239,(10));
var state_35297__$1 = (function (){var statearr_35368 = state_35297;
(statearr_35368[(33)] = inst_35238);

(statearr_35368[(34)] = inst_35233);

return statearr_35368;
})();
var statearr_35369_35432 = state_35297__$1;
(statearr_35369_35432[(2)] = inst_35240);

(statearr_35369_35432[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (16))){
var state_35297__$1 = state_35297;
var statearr_35370_35433 = state_35297__$1;
(statearr_35370_35433[(2)] = reload_dependents);

(statearr_35370_35433[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (38))){
var inst_35250 = (state_35297[(16)]);
var inst_35268 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35250);
var state_35297__$1 = state_35297;
var statearr_35371_35434 = state_35297__$1;
(statearr_35371_35434[(2)] = inst_35268);

(statearr_35371_35434[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (30))){
var state_35297__$1 = state_35297;
var statearr_35372_35435 = state_35297__$1;
(statearr_35372_35435[(2)] = null);

(statearr_35372_35435[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (10))){
var inst_35170 = (state_35297[(22)]);
var inst_35172 = cljs.core.chunked_seq_QMARK_.call(null,inst_35170);
var state_35297__$1 = state_35297;
if(inst_35172){
var statearr_35373_35436 = state_35297__$1;
(statearr_35373_35436[(1)] = (13));

} else {
var statearr_35374_35437 = state_35297__$1;
(statearr_35374_35437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (18))){
var inst_35204 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
if(cljs.core.truth_(inst_35204)){
var statearr_35375_35438 = state_35297__$1;
(statearr_35375_35438[(1)] = (19));

} else {
var statearr_35376_35439 = state_35297__$1;
(statearr_35376_35439[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (42))){
var state_35297__$1 = state_35297;
var statearr_35377_35440 = state_35297__$1;
(statearr_35377_35440[(2)] = null);

(statearr_35377_35440[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (37))){
var inst_35263 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
var statearr_35378_35441 = state_35297__$1;
(statearr_35378_35441[(2)] = inst_35263);

(statearr_35378_35441[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (8))){
var inst_35157 = (state_35297[(8)]);
var inst_35170 = (state_35297[(22)]);
var inst_35170__$1 = cljs.core.seq.call(null,inst_35157);
var state_35297__$1 = (function (){var statearr_35379 = state_35297;
(statearr_35379[(22)] = inst_35170__$1);

return statearr_35379;
})();
if(inst_35170__$1){
var statearr_35380_35442 = state_35297__$1;
(statearr_35380_35442[(1)] = (10));

} else {
var statearr_35381_35443 = state_35297__$1;
(statearr_35381_35443[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31582__auto__,c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto____0 = (function (){
var statearr_35382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35382[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto__);

(statearr_35382[(1)] = (1));

return statearr_35382;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto____1 = (function (state_35297){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_35297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e35383){if((e35383 instanceof Object)){
var ex__31586__auto__ = e35383;
var statearr_35384_35444 = state_35297;
(statearr_35384_35444[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35445 = state_35297;
state_35297 = G__35445;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto__ = function(state_35297){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto____1.call(this,state_35297);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31672__auto__ = (function (){var statearr_35385 = f__31671__auto__.call(null);
(statearr_35385[(6)] = c__31670__auto__);

return statearr_35385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto__,map__35142,map__35142__$1,opts,before_jsload,on_jsload,reload_dependents,map__35143,map__35143__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31670__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35448,link){
var map__35449 = p__35448;
var map__35449__$1 = ((((!((map__35449 == null)))?((((map__35449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35449):map__35449);
var file = cljs.core.get.call(null,map__35449__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35449,map__35449__$1,file){
return (function (p1__35446_SHARP_,p2__35447_SHARP_){
if(cljs.core._EQ_.call(null,p1__35446_SHARP_,p2__35447_SHARP_)){
return p1__35446_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35449,map__35449__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35452){
var map__35453 = p__35452;
var map__35453__$1 = ((((!((map__35453 == null)))?((((map__35453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35453):map__35453);
var match_length = cljs.core.get.call(null,map__35453__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35453__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35451_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35451_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35455_SHARP_,p2__35456_SHARP_){
return cljs.core.assoc.call(null,p1__35455_SHARP_,cljs.core.get.call(null,p2__35456_SHARP_,key),p2__35456_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35457 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35457);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35457);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35458,p__35459){
var map__35460 = p__35458;
var map__35460__$1 = ((((!((map__35460 == null)))?((((map__35460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35460):map__35460);
var on_cssload = cljs.core.get.call(null,map__35460__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35461 = p__35459;
var map__35461__$1 = ((((!((map__35461 == null)))?((((map__35461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35461):map__35461);
var files_msg = map__35461__$1;
var files = cljs.core.get.call(null,map__35461__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1521204778206
