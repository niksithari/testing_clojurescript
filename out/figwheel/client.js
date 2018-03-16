// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e36560){if((e36560 instanceof Error)){
var e = e36560;
return "Error: Unable to stringify";
} else {
throw e36560;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36563 = arguments.length;
switch (G__36563) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36561_SHARP_){
if(typeof p1__36561_SHARP_ === 'string'){
return p1__36561_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36561_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36566 = arguments.length;
var i__29159__auto___36567 = (0);
while(true){
if((i__29159__auto___36567 < len__29158__auto___36566)){
args__29165__auto__.push((arguments[i__29159__auto___36567]));

var G__36568 = (i__29159__auto___36567 + (1));
i__29159__auto___36567 = G__36568;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36565){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36565));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36570 = arguments.length;
var i__29159__auto___36571 = (0);
while(true){
if((i__29159__auto___36571 < len__29158__auto___36570)){
args__29165__auto__.push((arguments[i__29159__auto___36571]));

var G__36572 = (i__29159__auto___36571 + (1));
i__29159__auto___36571 = G__36572;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36569){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36569));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36573){
var map__36574 = p__36573;
var map__36574__$1 = ((((!((map__36574 == null)))?((((map__36574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36574):map__36574);
var message = cljs.core.get.call(null,map__36574__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36574__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27989__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27977__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27977__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27977__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31670__auto___36653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto___36653,ch){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto___36653,ch){
return (function (state_36625){
var state_val_36626 = (state_36625[(1)]);
if((state_val_36626 === (7))){
var inst_36621 = (state_36625[(2)]);
var state_36625__$1 = state_36625;
var statearr_36627_36654 = state_36625__$1;
(statearr_36627_36654[(2)] = inst_36621);

(statearr_36627_36654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (1))){
var state_36625__$1 = state_36625;
var statearr_36628_36655 = state_36625__$1;
(statearr_36628_36655[(2)] = null);

(statearr_36628_36655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (4))){
var inst_36578 = (state_36625[(7)]);
var inst_36578__$1 = (state_36625[(2)]);
var state_36625__$1 = (function (){var statearr_36629 = state_36625;
(statearr_36629[(7)] = inst_36578__$1);

return statearr_36629;
})();
if(cljs.core.truth_(inst_36578__$1)){
var statearr_36630_36656 = state_36625__$1;
(statearr_36630_36656[(1)] = (5));

} else {
var statearr_36631_36657 = state_36625__$1;
(statearr_36631_36657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (15))){
var inst_36585 = (state_36625[(8)]);
var inst_36600 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36585);
var inst_36601 = cljs.core.first.call(null,inst_36600);
var inst_36602 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36601);
var inst_36603 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36602)].join('');
var inst_36604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36603);
var state_36625__$1 = state_36625;
var statearr_36632_36658 = state_36625__$1;
(statearr_36632_36658[(2)] = inst_36604);

(statearr_36632_36658[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (13))){
var inst_36609 = (state_36625[(2)]);
var state_36625__$1 = state_36625;
var statearr_36633_36659 = state_36625__$1;
(statearr_36633_36659[(2)] = inst_36609);

(statearr_36633_36659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (6))){
var state_36625__$1 = state_36625;
var statearr_36634_36660 = state_36625__$1;
(statearr_36634_36660[(2)] = null);

(statearr_36634_36660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (17))){
var inst_36607 = (state_36625[(2)]);
var state_36625__$1 = state_36625;
var statearr_36635_36661 = state_36625__$1;
(statearr_36635_36661[(2)] = inst_36607);

(statearr_36635_36661[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (3))){
var inst_36623 = (state_36625[(2)]);
var state_36625__$1 = state_36625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36625__$1,inst_36623);
} else {
if((state_val_36626 === (12))){
var inst_36584 = (state_36625[(9)]);
var inst_36598 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36584,opts);
var state_36625__$1 = state_36625;
if(cljs.core.truth_(inst_36598)){
var statearr_36636_36662 = state_36625__$1;
(statearr_36636_36662[(1)] = (15));

} else {
var statearr_36637_36663 = state_36625__$1;
(statearr_36637_36663[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (2))){
var state_36625__$1 = state_36625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36625__$1,(4),ch);
} else {
if((state_val_36626 === (11))){
var inst_36585 = (state_36625[(8)]);
var inst_36590 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36591 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36585);
var inst_36592 = cljs.core.async.timeout.call(null,(1000));
var inst_36593 = [inst_36591,inst_36592];
var inst_36594 = (new cljs.core.PersistentVector(null,2,(5),inst_36590,inst_36593,null));
var state_36625__$1 = state_36625;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36625__$1,(14),inst_36594);
} else {
if((state_val_36626 === (9))){
var inst_36585 = (state_36625[(8)]);
var inst_36611 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36612 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36585);
var inst_36613 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36612);
var inst_36614 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36613)].join('');
var inst_36615 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36614);
var state_36625__$1 = (function (){var statearr_36638 = state_36625;
(statearr_36638[(10)] = inst_36611);

return statearr_36638;
})();
var statearr_36639_36664 = state_36625__$1;
(statearr_36639_36664[(2)] = inst_36615);

(statearr_36639_36664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (5))){
var inst_36578 = (state_36625[(7)]);
var inst_36580 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36581 = (new cljs.core.PersistentArrayMap(null,2,inst_36580,null));
var inst_36582 = (new cljs.core.PersistentHashSet(null,inst_36581,null));
var inst_36583 = figwheel.client.focus_msgs.call(null,inst_36582,inst_36578);
var inst_36584 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36583);
var inst_36585 = cljs.core.first.call(null,inst_36583);
var inst_36586 = figwheel.client.autoload_QMARK_.call(null);
var state_36625__$1 = (function (){var statearr_36640 = state_36625;
(statearr_36640[(8)] = inst_36585);

(statearr_36640[(9)] = inst_36584);

return statearr_36640;
})();
if(cljs.core.truth_(inst_36586)){
var statearr_36641_36665 = state_36625__$1;
(statearr_36641_36665[(1)] = (8));

} else {
var statearr_36642_36666 = state_36625__$1;
(statearr_36642_36666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (14))){
var inst_36596 = (state_36625[(2)]);
var state_36625__$1 = state_36625;
var statearr_36643_36667 = state_36625__$1;
(statearr_36643_36667[(2)] = inst_36596);

(statearr_36643_36667[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (16))){
var state_36625__$1 = state_36625;
var statearr_36644_36668 = state_36625__$1;
(statearr_36644_36668[(2)] = null);

(statearr_36644_36668[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (10))){
var inst_36617 = (state_36625[(2)]);
var state_36625__$1 = (function (){var statearr_36645 = state_36625;
(statearr_36645[(11)] = inst_36617);

return statearr_36645;
})();
var statearr_36646_36669 = state_36625__$1;
(statearr_36646_36669[(2)] = null);

(statearr_36646_36669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (8))){
var inst_36584 = (state_36625[(9)]);
var inst_36588 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36584,opts);
var state_36625__$1 = state_36625;
if(cljs.core.truth_(inst_36588)){
var statearr_36647_36670 = state_36625__$1;
(statearr_36647_36670[(1)] = (11));

} else {
var statearr_36648_36671 = state_36625__$1;
(statearr_36648_36671[(1)] = (12));

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
});})(c__31670__auto___36653,ch))
;
return ((function (switch__31582__auto__,c__31670__auto___36653,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31583__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31583__auto____0 = (function (){
var statearr_36649 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36649[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31583__auto__);

(statearr_36649[(1)] = (1));

return statearr_36649;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31583__auto____1 = (function (state_36625){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_36625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e36650){if((e36650 instanceof Object)){
var ex__31586__auto__ = e36650;
var statearr_36651_36672 = state_36625;
(statearr_36651_36672[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36673 = state_36625;
state_36625 = G__36673;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31583__auto__ = function(state_36625){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31583__auto____1.call(this,state_36625);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31583__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31583__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto___36653,ch))
})();
var state__31672__auto__ = (function (){var statearr_36652 = f__31671__auto__.call(null);
(statearr_36652[(6)] = c__31670__auto___36653);

return statearr_36652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto___36653,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36674_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36674_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36676 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36676){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36675){if((e36675 instanceof Error)){
var e = e36675;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36676], null));
} else {
var e = e36675;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36676))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36677){
var map__36678 = p__36677;
var map__36678__$1 = ((((!((map__36678 == null)))?((((map__36678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36678):map__36678);
var opts = map__36678__$1;
var build_id = cljs.core.get.call(null,map__36678__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36678,map__36678__$1,opts,build_id){
return (function (p__36680){
var vec__36681 = p__36680;
var seq__36682 = cljs.core.seq.call(null,vec__36681);
var first__36683 = cljs.core.first.call(null,seq__36682);
var seq__36682__$1 = cljs.core.next.call(null,seq__36682);
var map__36684 = first__36683;
var map__36684__$1 = ((((!((map__36684 == null)))?((((map__36684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36684):map__36684);
var msg = map__36684__$1;
var msg_name = cljs.core.get.call(null,map__36684__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36682__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36681,seq__36682,first__36683,seq__36682__$1,map__36684,map__36684__$1,msg,msg_name,_,map__36678,map__36678__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36681,seq__36682,first__36683,seq__36682__$1,map__36684,map__36684__$1,msg,msg_name,_,map__36678,map__36678__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36678,map__36678__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36686){
var vec__36687 = p__36686;
var seq__36688 = cljs.core.seq.call(null,vec__36687);
var first__36689 = cljs.core.first.call(null,seq__36688);
var seq__36688__$1 = cljs.core.next.call(null,seq__36688);
var map__36690 = first__36689;
var map__36690__$1 = ((((!((map__36690 == null)))?((((map__36690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36690):map__36690);
var msg = map__36690__$1;
var msg_name = cljs.core.get.call(null,map__36690__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36688__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36692){
var map__36693 = p__36692;
var map__36693__$1 = ((((!((map__36693 == null)))?((((map__36693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36693):map__36693);
var on_compile_warning = cljs.core.get.call(null,map__36693__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36693__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36693,map__36693__$1,on_compile_warning,on_compile_fail){
return (function (p__36695){
var vec__36696 = p__36695;
var seq__36697 = cljs.core.seq.call(null,vec__36696);
var first__36698 = cljs.core.first.call(null,seq__36697);
var seq__36697__$1 = cljs.core.next.call(null,seq__36697);
var map__36699 = first__36698;
var map__36699__$1 = ((((!((map__36699 == null)))?((((map__36699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36699):map__36699);
var msg = map__36699__$1;
var msg_name = cljs.core.get.call(null,map__36699__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36697__$1;
var pred__36701 = cljs.core._EQ_;
var expr__36702 = msg_name;
if(cljs.core.truth_(pred__36701.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36702))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36701.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36702))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36693,map__36693__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto__,msg_hist,msg_names,msg){
return (function (state_36791){
var state_val_36792 = (state_36791[(1)]);
if((state_val_36792 === (7))){
var inst_36711 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
if(cljs.core.truth_(inst_36711)){
var statearr_36793_36840 = state_36791__$1;
(statearr_36793_36840[(1)] = (8));

} else {
var statearr_36794_36841 = state_36791__$1;
(statearr_36794_36841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (20))){
var inst_36785 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36795_36842 = state_36791__$1;
(statearr_36795_36842[(2)] = inst_36785);

(statearr_36795_36842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (27))){
var inst_36781 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36796_36843 = state_36791__$1;
(statearr_36796_36843[(2)] = inst_36781);

(statearr_36796_36843[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (1))){
var inst_36704 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36791__$1 = state_36791;
if(cljs.core.truth_(inst_36704)){
var statearr_36797_36844 = state_36791__$1;
(statearr_36797_36844[(1)] = (2));

} else {
var statearr_36798_36845 = state_36791__$1;
(statearr_36798_36845[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (24))){
var inst_36783 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36799_36846 = state_36791__$1;
(statearr_36799_36846[(2)] = inst_36783);

(statearr_36799_36846[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (4))){
var inst_36789 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36791__$1,inst_36789);
} else {
if((state_val_36792 === (15))){
var inst_36787 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36800_36847 = state_36791__$1;
(statearr_36800_36847[(2)] = inst_36787);

(statearr_36800_36847[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (21))){
var inst_36740 = (state_36791[(2)]);
var inst_36741 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36742 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36741);
var state_36791__$1 = (function (){var statearr_36801 = state_36791;
(statearr_36801[(7)] = inst_36740);

return statearr_36801;
})();
var statearr_36802_36848 = state_36791__$1;
(statearr_36802_36848[(2)] = inst_36742);

(statearr_36802_36848[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (31))){
var inst_36770 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36791__$1 = state_36791;
if(cljs.core.truth_(inst_36770)){
var statearr_36803_36849 = state_36791__$1;
(statearr_36803_36849[(1)] = (34));

} else {
var statearr_36804_36850 = state_36791__$1;
(statearr_36804_36850[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (32))){
var inst_36779 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36805_36851 = state_36791__$1;
(statearr_36805_36851[(2)] = inst_36779);

(statearr_36805_36851[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (33))){
var inst_36766 = (state_36791[(2)]);
var inst_36767 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36768 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36767);
var state_36791__$1 = (function (){var statearr_36806 = state_36791;
(statearr_36806[(8)] = inst_36766);

return statearr_36806;
})();
var statearr_36807_36852 = state_36791__$1;
(statearr_36807_36852[(2)] = inst_36768);

(statearr_36807_36852[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (13))){
var inst_36725 = figwheel.client.heads_up.clear.call(null);
var state_36791__$1 = state_36791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(16),inst_36725);
} else {
if((state_val_36792 === (22))){
var inst_36746 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36747 = figwheel.client.heads_up.append_warning_message.call(null,inst_36746);
var state_36791__$1 = state_36791;
var statearr_36808_36853 = state_36791__$1;
(statearr_36808_36853[(2)] = inst_36747);

(statearr_36808_36853[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (36))){
var inst_36777 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36809_36854 = state_36791__$1;
(statearr_36809_36854[(2)] = inst_36777);

(statearr_36809_36854[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (29))){
var inst_36757 = (state_36791[(2)]);
var inst_36758 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36759 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36758);
var state_36791__$1 = (function (){var statearr_36810 = state_36791;
(statearr_36810[(9)] = inst_36757);

return statearr_36810;
})();
var statearr_36811_36855 = state_36791__$1;
(statearr_36811_36855[(2)] = inst_36759);

(statearr_36811_36855[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (6))){
var inst_36706 = (state_36791[(10)]);
var state_36791__$1 = state_36791;
var statearr_36812_36856 = state_36791__$1;
(statearr_36812_36856[(2)] = inst_36706);

(statearr_36812_36856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (28))){
var inst_36753 = (state_36791[(2)]);
var inst_36754 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36755 = figwheel.client.heads_up.display_warning.call(null,inst_36754);
var state_36791__$1 = (function (){var statearr_36813 = state_36791;
(statearr_36813[(11)] = inst_36753);

return statearr_36813;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(29),inst_36755);
} else {
if((state_val_36792 === (25))){
var inst_36751 = figwheel.client.heads_up.clear.call(null);
var state_36791__$1 = state_36791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(28),inst_36751);
} else {
if((state_val_36792 === (34))){
var inst_36772 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36791__$1 = state_36791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(37),inst_36772);
} else {
if((state_val_36792 === (17))){
var inst_36731 = (state_36791[(2)]);
var inst_36732 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36733 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36732);
var state_36791__$1 = (function (){var statearr_36814 = state_36791;
(statearr_36814[(12)] = inst_36731);

return statearr_36814;
})();
var statearr_36815_36857 = state_36791__$1;
(statearr_36815_36857[(2)] = inst_36733);

(statearr_36815_36857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (3))){
var inst_36723 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36791__$1 = state_36791;
if(cljs.core.truth_(inst_36723)){
var statearr_36816_36858 = state_36791__$1;
(statearr_36816_36858[(1)] = (13));

} else {
var statearr_36817_36859 = state_36791__$1;
(statearr_36817_36859[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (12))){
var inst_36719 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36818_36860 = state_36791__$1;
(statearr_36818_36860[(2)] = inst_36719);

(statearr_36818_36860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (2))){
var inst_36706 = (state_36791[(10)]);
var inst_36706__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36791__$1 = (function (){var statearr_36819 = state_36791;
(statearr_36819[(10)] = inst_36706__$1);

return statearr_36819;
})();
if(cljs.core.truth_(inst_36706__$1)){
var statearr_36820_36861 = state_36791__$1;
(statearr_36820_36861[(1)] = (5));

} else {
var statearr_36821_36862 = state_36791__$1;
(statearr_36821_36862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (23))){
var inst_36749 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36791__$1 = state_36791;
if(cljs.core.truth_(inst_36749)){
var statearr_36822_36863 = state_36791__$1;
(statearr_36822_36863[(1)] = (25));

} else {
var statearr_36823_36864 = state_36791__$1;
(statearr_36823_36864[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (35))){
var state_36791__$1 = state_36791;
var statearr_36824_36865 = state_36791__$1;
(statearr_36824_36865[(2)] = null);

(statearr_36824_36865[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (19))){
var inst_36744 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36791__$1 = state_36791;
if(cljs.core.truth_(inst_36744)){
var statearr_36825_36866 = state_36791__$1;
(statearr_36825_36866[(1)] = (22));

} else {
var statearr_36826_36867 = state_36791__$1;
(statearr_36826_36867[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (11))){
var inst_36715 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36827_36868 = state_36791__$1;
(statearr_36827_36868[(2)] = inst_36715);

(statearr_36827_36868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (9))){
var inst_36717 = figwheel.client.heads_up.clear.call(null);
var state_36791__$1 = state_36791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(12),inst_36717);
} else {
if((state_val_36792 === (5))){
var inst_36708 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36791__$1 = state_36791;
var statearr_36828_36869 = state_36791__$1;
(statearr_36828_36869[(2)] = inst_36708);

(statearr_36828_36869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (14))){
var inst_36735 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36791__$1 = state_36791;
if(cljs.core.truth_(inst_36735)){
var statearr_36829_36870 = state_36791__$1;
(statearr_36829_36870[(1)] = (18));

} else {
var statearr_36830_36871 = state_36791__$1;
(statearr_36830_36871[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (26))){
var inst_36761 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36791__$1 = state_36791;
if(cljs.core.truth_(inst_36761)){
var statearr_36831_36872 = state_36791__$1;
(statearr_36831_36872[(1)] = (30));

} else {
var statearr_36832_36873 = state_36791__$1;
(statearr_36832_36873[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (16))){
var inst_36727 = (state_36791[(2)]);
var inst_36728 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36729 = figwheel.client.heads_up.display_exception.call(null,inst_36728);
var state_36791__$1 = (function (){var statearr_36833 = state_36791;
(statearr_36833[(13)] = inst_36727);

return statearr_36833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(17),inst_36729);
} else {
if((state_val_36792 === (30))){
var inst_36763 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36764 = figwheel.client.heads_up.display_warning.call(null,inst_36763);
var state_36791__$1 = state_36791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(33),inst_36764);
} else {
if((state_val_36792 === (10))){
var inst_36721 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36834_36874 = state_36791__$1;
(statearr_36834_36874[(2)] = inst_36721);

(statearr_36834_36874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (18))){
var inst_36737 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36738 = figwheel.client.heads_up.display_exception.call(null,inst_36737);
var state_36791__$1 = state_36791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(21),inst_36738);
} else {
if((state_val_36792 === (37))){
var inst_36774 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36835_36875 = state_36791__$1;
(statearr_36835_36875[(2)] = inst_36774);

(statearr_36835_36875[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (8))){
var inst_36713 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36791__$1 = state_36791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(11),inst_36713);
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
});})(c__31670__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31582__auto__,c__31670__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto____0 = (function (){
var statearr_36836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36836[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto__);

(statearr_36836[(1)] = (1));

return statearr_36836;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto____1 = (function (state_36791){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_36791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e36837){if((e36837 instanceof Object)){
var ex__31586__auto__ = e36837;
var statearr_36838_36876 = state_36791;
(statearr_36838_36876[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36877 = state_36791;
state_36791 = G__36877;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto__ = function(state_36791){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto____1.call(this,state_36791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto__,msg_hist,msg_names,msg))
})();
var state__31672__auto__ = (function (){var statearr_36839 = f__31671__auto__.call(null);
(statearr_36839[(6)] = c__31670__auto__);

return statearr_36839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto__,msg_hist,msg_names,msg))
);

return c__31670__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31670__auto___36906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto___36906,ch){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto___36906,ch){
return (function (state_36892){
var state_val_36893 = (state_36892[(1)]);
if((state_val_36893 === (1))){
var state_36892__$1 = state_36892;
var statearr_36894_36907 = state_36892__$1;
(statearr_36894_36907[(2)] = null);

(statearr_36894_36907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36893 === (2))){
var state_36892__$1 = state_36892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36892__$1,(4),ch);
} else {
if((state_val_36893 === (3))){
var inst_36890 = (state_36892[(2)]);
var state_36892__$1 = state_36892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36892__$1,inst_36890);
} else {
if((state_val_36893 === (4))){
var inst_36880 = (state_36892[(7)]);
var inst_36880__$1 = (state_36892[(2)]);
var state_36892__$1 = (function (){var statearr_36895 = state_36892;
(statearr_36895[(7)] = inst_36880__$1);

return statearr_36895;
})();
if(cljs.core.truth_(inst_36880__$1)){
var statearr_36896_36908 = state_36892__$1;
(statearr_36896_36908[(1)] = (5));

} else {
var statearr_36897_36909 = state_36892__$1;
(statearr_36897_36909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36893 === (5))){
var inst_36880 = (state_36892[(7)]);
var inst_36882 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36880);
var state_36892__$1 = state_36892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36892__$1,(8),inst_36882);
} else {
if((state_val_36893 === (6))){
var state_36892__$1 = state_36892;
var statearr_36898_36910 = state_36892__$1;
(statearr_36898_36910[(2)] = null);

(statearr_36898_36910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36893 === (7))){
var inst_36888 = (state_36892[(2)]);
var state_36892__$1 = state_36892;
var statearr_36899_36911 = state_36892__$1;
(statearr_36899_36911[(2)] = inst_36888);

(statearr_36899_36911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36893 === (8))){
var inst_36884 = (state_36892[(2)]);
var state_36892__$1 = (function (){var statearr_36900 = state_36892;
(statearr_36900[(8)] = inst_36884);

return statearr_36900;
})();
var statearr_36901_36912 = state_36892__$1;
(statearr_36901_36912[(2)] = null);

(statearr_36901_36912[(1)] = (2));


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
});})(c__31670__auto___36906,ch))
;
return ((function (switch__31582__auto__,c__31670__auto___36906,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31583__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31583__auto____0 = (function (){
var statearr_36902 = [null,null,null,null,null,null,null,null,null];
(statearr_36902[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31583__auto__);

(statearr_36902[(1)] = (1));

return statearr_36902;
});
var figwheel$client$heads_up_plugin_$_state_machine__31583__auto____1 = (function (state_36892){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_36892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e36903){if((e36903 instanceof Object)){
var ex__31586__auto__ = e36903;
var statearr_36904_36913 = state_36892;
(statearr_36904_36913[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36914 = state_36892;
state_36892 = G__36914;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31583__auto__ = function(state_36892){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31583__auto____1.call(this,state_36892);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31583__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31583__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto___36906,ch))
})();
var state__31672__auto__ = (function (){var statearr_36905 = f__31671__auto__.call(null);
(statearr_36905[(6)] = c__31670__auto___36906);

return statearr_36905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto___36906,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto__){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto__){
return (function (state_36920){
var state_val_36921 = (state_36920[(1)]);
if((state_val_36921 === (1))){
var inst_36915 = cljs.core.async.timeout.call(null,(3000));
var state_36920__$1 = state_36920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36920__$1,(2),inst_36915);
} else {
if((state_val_36921 === (2))){
var inst_36917 = (state_36920[(2)]);
var inst_36918 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36920__$1 = (function (){var statearr_36922 = state_36920;
(statearr_36922[(7)] = inst_36917);

return statearr_36922;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36920__$1,inst_36918);
} else {
return null;
}
}
});})(c__31670__auto__))
;
return ((function (switch__31582__auto__,c__31670__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31583__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31583__auto____0 = (function (){
var statearr_36923 = [null,null,null,null,null,null,null,null];
(statearr_36923[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31583__auto__);

(statearr_36923[(1)] = (1));

return statearr_36923;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31583__auto____1 = (function (state_36920){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_36920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e36924){if((e36924 instanceof Object)){
var ex__31586__auto__ = e36924;
var statearr_36925_36927 = state_36920;
(statearr_36925_36927[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36928 = state_36920;
state_36920 = G__36928;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31583__auto__ = function(state_36920){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31583__auto____1.call(this,state_36920);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31583__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31583__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto__))
})();
var state__31672__auto__ = (function (){var statearr_36926 = f__31671__auto__.call(null);
(statearr_36926[(6)] = c__31670__auto__);

return statearr_36926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto__))
);

return c__31670__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36935){
var state_val_36936 = (state_36935[(1)]);
if((state_val_36936 === (1))){
var inst_36929 = cljs.core.async.timeout.call(null,(2000));
var state_36935__$1 = state_36935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36935__$1,(2),inst_36929);
} else {
if((state_val_36936 === (2))){
var inst_36931 = (state_36935[(2)]);
var inst_36932 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_36933 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36932);
var state_36935__$1 = (function (){var statearr_36937 = state_36935;
(statearr_36937[(7)] = inst_36931);

return statearr_36937;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36935__$1,inst_36933);
} else {
return null;
}
}
});})(c__31670__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31582__auto__,c__31670__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31583__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31583__auto____0 = (function (){
var statearr_36938 = [null,null,null,null,null,null,null,null];
(statearr_36938[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31583__auto__);

(statearr_36938[(1)] = (1));

return statearr_36938;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31583__auto____1 = (function (state_36935){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_36935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e36939){if((e36939 instanceof Object)){
var ex__31586__auto__ = e36939;
var statearr_36940_36942 = state_36935;
(statearr_36940_36942[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36943 = state_36935;
state_36935 = G__36943;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31583__auto__ = function(state_36935){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31583__auto____1.call(this,state_36935);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31583__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31583__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31672__auto__ = (function (){var statearr_36941 = f__31671__auto__.call(null);
(statearr_36941[(6)] = c__31670__auto__);

return statearr_36941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto__,figwheel_version,temp__4657__auto__))
);

return c__31670__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36944){
var map__36945 = p__36944;
var map__36945__$1 = ((((!((map__36945 == null)))?((((map__36945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36945):map__36945);
var file = cljs.core.get.call(null,map__36945__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36945__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36945__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36947 = "";
var G__36947__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36947),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36947);
var G__36947__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36947__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36947__$1);
if(cljs.core.truth_((function (){var and__27977__auto__ = line;
if(cljs.core.truth_(and__27977__auto__)){
return column;
} else {
return and__27977__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36947__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36947__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36948){
var map__36949 = p__36948;
var map__36949__$1 = ((((!((map__36949 == null)))?((((map__36949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36949):map__36949);
var ed = map__36949__$1;
var formatted_exception = cljs.core.get.call(null,map__36949__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36949__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36949__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36951_36955 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36952_36956 = null;
var count__36953_36957 = (0);
var i__36954_36958 = (0);
while(true){
if((i__36954_36958 < count__36953_36957)){
var msg_36959 = cljs.core._nth.call(null,chunk__36952_36956,i__36954_36958);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36959);

var G__36960 = seq__36951_36955;
var G__36961 = chunk__36952_36956;
var G__36962 = count__36953_36957;
var G__36963 = (i__36954_36958 + (1));
seq__36951_36955 = G__36960;
chunk__36952_36956 = G__36961;
count__36953_36957 = G__36962;
i__36954_36958 = G__36963;
continue;
} else {
var temp__4657__auto___36964 = cljs.core.seq.call(null,seq__36951_36955);
if(temp__4657__auto___36964){
var seq__36951_36965__$1 = temp__4657__auto___36964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36951_36965__$1)){
var c__28828__auto___36966 = cljs.core.chunk_first.call(null,seq__36951_36965__$1);
var G__36967 = cljs.core.chunk_rest.call(null,seq__36951_36965__$1);
var G__36968 = c__28828__auto___36966;
var G__36969 = cljs.core.count.call(null,c__28828__auto___36966);
var G__36970 = (0);
seq__36951_36955 = G__36967;
chunk__36952_36956 = G__36968;
count__36953_36957 = G__36969;
i__36954_36958 = G__36970;
continue;
} else {
var msg_36971 = cljs.core.first.call(null,seq__36951_36965__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36971);

var G__36972 = cljs.core.next.call(null,seq__36951_36965__$1);
var G__36973 = null;
var G__36974 = (0);
var G__36975 = (0);
seq__36951_36955 = G__36972;
chunk__36952_36956 = G__36973;
count__36953_36957 = G__36974;
i__36954_36958 = G__36975;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36976){
var map__36977 = p__36976;
var map__36977__$1 = ((((!((map__36977 == null)))?((((map__36977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36977):map__36977);
var w = map__36977__$1;
var message = cljs.core.get.call(null,map__36977__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out\\figwheel\\client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27977__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27977__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27977__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36979 = cljs.core.seq.call(null,plugins);
var chunk__36980 = null;
var count__36981 = (0);
var i__36982 = (0);
while(true){
if((i__36982 < count__36981)){
var vec__36983 = cljs.core._nth.call(null,chunk__36980,i__36982);
var k = cljs.core.nth.call(null,vec__36983,(0),null);
var plugin = cljs.core.nth.call(null,vec__36983,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36989 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36979,chunk__36980,count__36981,i__36982,pl_36989,vec__36983,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36989.call(null,msg_hist);
});})(seq__36979,chunk__36980,count__36981,i__36982,pl_36989,vec__36983,k,plugin))
);
} else {
}

var G__36990 = seq__36979;
var G__36991 = chunk__36980;
var G__36992 = count__36981;
var G__36993 = (i__36982 + (1));
seq__36979 = G__36990;
chunk__36980 = G__36991;
count__36981 = G__36992;
i__36982 = G__36993;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36979);
if(temp__4657__auto__){
var seq__36979__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36979__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__36979__$1);
var G__36994 = cljs.core.chunk_rest.call(null,seq__36979__$1);
var G__36995 = c__28828__auto__;
var G__36996 = cljs.core.count.call(null,c__28828__auto__);
var G__36997 = (0);
seq__36979 = G__36994;
chunk__36980 = G__36995;
count__36981 = G__36996;
i__36982 = G__36997;
continue;
} else {
var vec__36986 = cljs.core.first.call(null,seq__36979__$1);
var k = cljs.core.nth.call(null,vec__36986,(0),null);
var plugin = cljs.core.nth.call(null,vec__36986,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36998 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36979,chunk__36980,count__36981,i__36982,pl_36998,vec__36986,k,plugin,seq__36979__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36998.call(null,msg_hist);
});})(seq__36979,chunk__36980,count__36981,i__36982,pl_36998,vec__36986,k,plugin,seq__36979__$1,temp__4657__auto__))
);
} else {
}

var G__36999 = cljs.core.next.call(null,seq__36979__$1);
var G__37000 = null;
var G__37001 = (0);
var G__37002 = (0);
seq__36979 = G__36999;
chunk__36980 = G__37000;
count__36981 = G__37001;
i__36982 = G__37002;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37004 = arguments.length;
switch (G__37004) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37005_37010 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37006_37011 = null;
var count__37007_37012 = (0);
var i__37008_37013 = (0);
while(true){
if((i__37008_37013 < count__37007_37012)){
var msg_37014 = cljs.core._nth.call(null,chunk__37006_37011,i__37008_37013);
figwheel.client.socket.handle_incoming_message.call(null,msg_37014);

var G__37015 = seq__37005_37010;
var G__37016 = chunk__37006_37011;
var G__37017 = count__37007_37012;
var G__37018 = (i__37008_37013 + (1));
seq__37005_37010 = G__37015;
chunk__37006_37011 = G__37016;
count__37007_37012 = G__37017;
i__37008_37013 = G__37018;
continue;
} else {
var temp__4657__auto___37019 = cljs.core.seq.call(null,seq__37005_37010);
if(temp__4657__auto___37019){
var seq__37005_37020__$1 = temp__4657__auto___37019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37005_37020__$1)){
var c__28828__auto___37021 = cljs.core.chunk_first.call(null,seq__37005_37020__$1);
var G__37022 = cljs.core.chunk_rest.call(null,seq__37005_37020__$1);
var G__37023 = c__28828__auto___37021;
var G__37024 = cljs.core.count.call(null,c__28828__auto___37021);
var G__37025 = (0);
seq__37005_37010 = G__37022;
chunk__37006_37011 = G__37023;
count__37007_37012 = G__37024;
i__37008_37013 = G__37025;
continue;
} else {
var msg_37026 = cljs.core.first.call(null,seq__37005_37020__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37026);

var G__37027 = cljs.core.next.call(null,seq__37005_37020__$1);
var G__37028 = null;
var G__37029 = (0);
var G__37030 = (0);
seq__37005_37010 = G__37027;
chunk__37006_37011 = G__37028;
count__37007_37012 = G__37029;
i__37008_37013 = G__37030;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29165__auto__ = [];
var len__29158__auto___37035 = arguments.length;
var i__29159__auto___37036 = (0);
while(true){
if((i__29159__auto___37036 < len__29158__auto___37035)){
args__29165__auto__.push((arguments[i__29159__auto___37036]));

var G__37037 = (i__29159__auto___37036 + (1));
i__29159__auto___37036 = G__37037;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37032){
var map__37033 = p__37032;
var map__37033__$1 = ((((!((map__37033 == null)))?((((map__37033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37033):map__37033);
var opts = map__37033__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37031){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37031));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37038){if((e37038 instanceof Error)){
var e = e37038;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37038;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37039){
var map__37040 = p__37039;
var map__37040__$1 = ((((!((map__37040 == null)))?((((map__37040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37040):map__37040);
var msg_name = cljs.core.get.call(null,map__37040__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1521204781583
