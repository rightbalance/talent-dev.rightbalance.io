/*! For license information please see screens-CandidateFormScreen-interactive-CandidateFormScreen-interactive-stories.e4399138.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_rb_portals_talent_portal=self.webpackChunk_rb_portals_talent_portal||[]).push([[65],{"../../node_modules/.pnpm/@babel+runtime@7.22.3/node_modules/@babel/runtime/helpers/regeneratorRuntime.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _typeof=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.3/node_modules/@babel/runtime/helpers/typeof.js").default;function _regeneratorRuntime(){"use strict";module.exports=_regeneratorRuntime=function _regeneratorRuntime(){return exports},module.exports.__esModule=!0,module.exports.default=module.exports;var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}module.exports=_regeneratorRuntime,module.exports.__esModule=!0,module.exports.default=module.exports},"../../node_modules/.pnpm/@babel+runtime@7.22.3/node_modules/@babel/runtime/helpers/typeof.js":module=>{function _typeof(obj){return module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},module.exports.__esModule=!0,module.exports.default=module.exports,_typeof(obj)}module.exports=_typeof,module.exports.__esModule=!0,module.exports.default=module.exports},"../../node_modules/.pnpm/@babel+runtime@7.22.3/node_modules/@babel/runtime/regenerator/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var runtime=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.3/node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();module.exports=runtime;try{regeneratorRuntime=runtime}catch(accidentalStrictMode){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}},"./src/screens/CandidateFormScreen/interactive/CandidateFormScreen.interactive.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FormStepperTemplate:()=>FormStepperTemplate,Interactive_Form_FetchingError:()=>Interactive_Form_FetchingError,Interactive_Form_Reading:()=>Interactive_Form_Reading,Interactive_Form__Empty_Candidate:()=>Interactive_Form__Empty_Candidate,Interactive_Form__Returning_Candidate:()=>Interactive_Form__Returning_Candidate,default:()=>CandidateFormScreen_interactive_stories});var defineProperty=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.3/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.3/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),CandidateForm_UI=__webpack_require__("./src/screens/CandidateFormScreen/ui/CandidateForm.UI.tsx");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var regenerator=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.3/node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),dist=__webpack_require__("../domain/dist/index.js"),_excluded=["candidate","onSubmit"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var useCandidateFormScreenController=function useCandidateFormScreenController(_ref){var candidate=_ref.candidate,baseSubmit=_ref.onSubmit,passthroughProps=(0,objectWithoutProperties.Z)(_ref,_excluded),_useCandidateFormData=useCandidateFormDataController(candidate);return function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({step1Data:_useCandidateFormData.step1Data,step2Data:_useCandidateFormData.step2Data,jobRolesStepData:_useCandidateFormData.jobRolesStepData,step3Data:_useCandidateFormData.step3Data,onSubmit:useEnhancedSubmissionController(baseSubmit).onSubmit},passthroughProps)},useCandidateFormDataController=function useCandidateFormDataController(candidate){return{step1Data:(0,react.useMemo)((function(){return candidate?dist.Ey.step1.fromCandidate(candidate):null}),[candidate]),step2Data:(0,react.useMemo)((function(){return candidate?dist.Ey.step2.fromCandidate(candidate):null}),[candidate]),jobRolesStepData:(0,react.useMemo)((function(){return candidate?dist.Ey.jobRolesStep.fromCandidate(candidate):null}),[candidate]),step3Data:(0,react.useMemo)((function(){return candidate?dist.Ey.step3.fromCandidate(candidate):null}),[candidate])}},useEnhancedSubmissionController=function useEnhancedSubmissionController(baseSubmit){var onSubmit=(0,react.useCallback)(function(){var _ref2=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regenerator_default().mark((function _callee(data,stepId){var updatePayload,completed;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(updatePayload=function(){switch(stepId){case dist.vo.Step1:return dist.Ey.step1.toCandidate(data);case dist.vo.Step2:return dist.Ey.step2.toCandidate(data);case dist.vo.JobRolesStep:return dist.Ey.jobRolesStep.toCandidate(data);case dist.vo.Step3:return dist.Ey.step3.toCandidate(data);default:return null}}()){_context.next=3;break}return _context.abrupt("return");case 3:completed=stepId===dist.vo.Step3,baseSubmit(updatePayload,completed);case 5:case"end":return _context.stop()}}),_callee)})));return function(_x,_x2){return _ref2.apply(this,arguments)}}(),[baseSubmit]);return{onSubmit}},__jsx=react.createElement,CandidateFormScreenInteractive=function CandidateFormScreenInteractive(props){return __jsx(CandidateForm_UI.w,useCandidateFormScreenController(props))};CandidateFormScreenInteractive.displayName="CandidateFormScreenInteractive",CandidateFormScreenInteractive.__docgenInfo={description:"",methods:[],displayName:"CandidateFormScreenInteractive"};try{CandidateFormScreenInteractive.displayName="CandidateFormScreenInteractive",CandidateFormScreenInteractive.__docgenInfo={description:"",displayName:"CandidateFormScreenInteractive",props:{availableCountries:{defaultValue:null,description:"",name:"availableCountries",required:!1,type:{name:"{ id: string; name: string; phoneCode: string; phoneInputMask: string; }[]"}},availableCustomQuestions:{defaultValue:null,description:"",name:"availableCustomQuestions",required:!1,type:{name:'{ id: string; createdBy: string; createdAt: string; jobRoleIds: string[]; candidatesTableFieldName: string; question: string; answerType: "string" | "number" | "select"; lastUpdatedBy?: string | ... 1 more ...; lastUpdatedAt?: string | ... 1 more ...; deletedAt?: string | ... 1 more ... | und...'}},availableJobRoles:{defaultValue:null,description:"",name:"availableJobRoles",required:!1,type:{name:"{ id: string; createdBy: string; createdAt: string; name: string; lastUpdatedBy?: string | null; lastUpdatedAt?: string | null; deletedAt?: string | null | undefined; deletedBy?: string | ... 1 more ... | undefined; description?: string | ... 1 more ... | undefined; customQuestionIds?: string..."}},candidate:{defaultValue:null,description:"",name:"candidate",required:!1,type:{name:"{ id: string; createdBy: string; createdAt: string; lastUpdatedBy?: string | null; lastUpdatedAt?: string | null; deletedAt?: string | null | undefined; deletedBy?: string | ... 1 more ... | undefined; ... 4 more ...; jobRoles?: { ...; } | ... 1 more ... | undefined; } | null | undefined"}},activeStep:{defaultValue:null,description:"",name:"activeStep",required:!0,type:{name:"number"}},navigateToStep:{defaultValue:null,description:"",name:"navigateToStep",required:!0,type:{name:"(step: number) => void"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(candidate: { id?: string | undefined; createdBy?: string | undefined; createdAt?: string | undefined; lastUpdatedBy?: string | null | undefined; lastUpdatedAt?: string | null | undefined; ... 6 more ...; jobRoles?: { ...; } | ... 1 more ... | undefined; }, complete: boolean) => void"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | null"}},reload:{defaultValue:null,description:"",name:"reload",required:!0,type:{name:"() => void"}},saving:{defaultValue:null,description:"",name:"saving",required:!1,type:{name:"boolean"}},reading:{defaultValue:null,description:"",name:"reading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/CandidateFormScreen/interactive/CandidateFormScreen.interactive.tsx#CandidateFormScreenInteractive"]={docgenInfo:CandidateFormScreenInteractive.__docgenInfo,name:"CandidateFormScreenInteractive",path:"src/screens/CandidateFormScreen/interactive/CandidateFormScreen.interactive.tsx#CandidateFormScreenInteractive"})}catch(__react_docgen_typescript_loader_error){}var _FormStepperTemplate$,_FormStepperTemplate$2,_FormStepperTemplate$3,_Default$parameters,_Default$parameters2,_Default$parameters2$,_Interactive_Form_Rea,_Interactive_Form_Rea2,_Interactive_Form_Rea3,_Interactive_Form_Fet,_Interactive_Form_Fet2,_Interactive_Form_Fet3,_Interactive_Form__Em,_Interactive_Form__Em2,_Interactive_Form__Em3,_Interactive_Form__Re,_Interactive_Form__Re2,_Interactive_Form__Re3,_mocks_=__webpack_require__("../domain/dist/__mocks__.js"),esm=__webpack_require__("../../node_modules/.pnpm/@faker-js+faker@8.0.2/node_modules/@faker-js/faker/dist/esm/index.mjs"),AppLayout_decorator=__webpack_require__("./src/screens/AppLayout/AppLayout.decorator.tsx"),CandidateFormScreen_interactive_stories_excluded=["onSubmit","onCompleted"],CandidateFormScreen_interactive_stories_jsx=react.createElement;function CandidateFormScreen_interactive_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function CandidateFormScreen_interactive_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?CandidateFormScreen_interactive_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):CandidateFormScreen_interactive_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const CandidateFormScreen_interactive_stories={title:"Candidate Form / Stepper / Interactive",component:CandidateFormScreenInteractive,tags:["autodocs"],argTypes:{onSubmit:{action:!0},reload:{action:!0},onCompleted:{action:!0}},decorators:[AppLayout_decorator.q],parameters:{layout:"fullscreen"}};var FormStepperTemplate=function FormStepperTemplate(_ref){var baseSubmit=_ref.onSubmit,onCompleted=_ref.onCompleted,args=(0,objectWithoutProperties.Z)(_ref,CandidateFormScreen_interactive_stories_excluded),_useState=(0,react.useState)(0),activeStep=_useState[0],navigateToStep=_useState[1],doSubmit=(0,react.useCallback)((function(obj,complete){baseSubmit(obj,complete),complete||navigateToStep((function(activeStep){return activeStep+1}))}),[baseSubmit]),_useDataInteractionSi=function useDataInteractionSimulation(mockedData,onSave,onCompleted){var timeoutSize=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e3,_useState=(0,react.useState)(!0),reading=_useState[0],setReading=_useState[1],_useState2=(0,react.useState)(!1),saving=_useState2[0],setSaving=_useState2[1],_useState3=(0,react.useState)(null),data=_useState3[0],setDataState=_useState3[1],reload=(0,react.useCallback)((function(){setReading(!0),setTimeout((function(){setReading(!1)}),timeoutSize)}),[timeoutSize]),onSubmit=(0,react.useCallback)((function(obj,isComplete){setSaving(!0),setTimeout((function(){onSave(obj,isComplete),setSaving(!1),isComplete&&onCompleted()}),timeoutSize)}),[onCompleted,onSave,timeoutSize]);return(0,react.useEffect)((function(){setReading(!0);var handler=setTimeout((function(){setDataState(mockedData),setReading(!1)}),timeoutSize);return function(){return clearTimeout(handler)}}),[timeoutSize]),{onSubmit,data,reading,reload,saving}}({availableCountries:_mocks_.DY,availableCustomQuestions:_mocks_.ut,availableJobRoles:_mocks_.TX,candidate:_mocks_.wI},doSubmit,onCompleted),data=_useDataInteractionSi.data,reading=_useDataInteractionSi.reading,reload=_useDataInteractionSi.reload,onSubmit=_useDataInteractionSi.onSubmit,saving=_useDataInteractionSi.saving;return CandidateFormScreen_interactive_stories_jsx(CandidateFormScreenInteractive,(0,esm_extends.Z)({},args,data,{reading,reload,saving,onSubmit,onCompleted,activeStep,navigateToStep}))};FormStepperTemplate.displayName="FormStepperTemplate";var Default=FormStepperTemplate.bind({});Default.args={reading:!0};var Interactive_Form_Reading=FormStepperTemplate.bind({});Interactive_Form_Reading.args={reading:!0};var Interactive_Form_FetchingError=FormStepperTemplate.bind({});Interactive_Form_FetchingError.args={errorMessage:esm.We.hacker.phrase()};var Interactive_Form__Empty_Candidate=FormStepperTemplate.bind({});Interactive_Form__Empty_Candidate.args={availableCountries:_mocks_.DY,availableCustomQuestions:_mocks_.ut,availableJobRoles:_mocks_.TX};var Interactive_Form__Returning_Candidate=FormStepperTemplate.bind({});Interactive_Form__Returning_Candidate.args=CandidateFormScreen_interactive_stories_objectSpread(CandidateFormScreen_interactive_stories_objectSpread({},Interactive_Form__Empty_Candidate.args),{},{candidate:_mocks_.wI}),FormStepperTemplate.parameters=CandidateFormScreen_interactive_stories_objectSpread(CandidateFormScreen_interactive_stories_objectSpread({},FormStepperTemplate.parameters),{},{docs:CandidateFormScreen_interactive_stories_objectSpread(CandidateFormScreen_interactive_stories_objectSpread({},null===(_FormStepperTemplate$=FormStepperTemplate.parameters)||void 0===_FormStepperTemplate$?void 0:_FormStepperTemplate$.docs),{},{source:CandidateFormScreen_interactive_stories_objectSpread({originalSource:"({\n  onSubmit: baseSubmit,\n  onCompleted,\n  ...args\n}) => {\n  const [activeStep, navigateToStep] = useState(0);\n  const doSubmit = useCallback<StoryProps['onSubmit']>((obj, complete) => {\n    baseSubmit(obj, complete);\n    if (!complete) {\n      navigateToStep(activeStep => activeStep + 1);\n    }\n  }, [baseSubmit]);\n  const {\n    data,\n    reading,\n    reload,\n    onSubmit,\n    saving\n  } = useDataInteractionSimulation<CandidateFormScreenDataDependencies, Candidate>({\n    availableCountries: mockedAvailableCountries,\n    availableCustomQuestions: mockedCustomQuestions,\n    availableJobRoles: mockedJobRoles,\n    candidate: mockedCandidate\n  }, doSubmit, onCompleted);\n  return <CandidateFormScreenInteractive {...args} {...data} {...{\n    reading,\n    reload,\n    saving,\n    onSubmit,\n    onCompleted,\n    activeStep,\n    navigateToStep\n  }} />;\n}"},null===(_FormStepperTemplate$2=FormStepperTemplate.parameters)||void 0===_FormStepperTemplate$2||null===(_FormStepperTemplate$3=_FormStepperTemplate$2.docs)||void 0===_FormStepperTemplate$3?void 0:_FormStepperTemplate$3.source)})}),Default.parameters=CandidateFormScreen_interactive_stories_objectSpread(CandidateFormScreen_interactive_stories_objectSpread({},Default.parameters),{},{docs:CandidateFormScreen_interactive_stories_objectSpread(CandidateFormScreen_interactive_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:CandidateFormScreen_interactive_stories_objectSpread({originalSource:"({\n  onSubmit: baseSubmit,\n  onCompleted,\n  ...args\n}) => {\n  const [activeStep, navigateToStep] = useState(0);\n  const doSubmit = useCallback<StoryProps['onSubmit']>((obj, complete) => {\n    baseSubmit(obj, complete);\n    if (!complete) {\n      navigateToStep(activeStep => activeStep + 1);\n    }\n  }, [baseSubmit]);\n  const {\n    data,\n    reading,\n    reload,\n    onSubmit,\n    saving\n  } = useDataInteractionSimulation<CandidateFormScreenDataDependencies, Candidate>({\n    availableCountries: mockedAvailableCountries,\n    availableCustomQuestions: mockedCustomQuestions,\n    availableJobRoles: mockedJobRoles,\n    candidate: mockedCandidate\n  }, doSubmit, onCompleted);\n  return <CandidateFormScreenInteractive {...args} {...data} {...{\n    reading,\n    reload,\n    saving,\n    onSubmit,\n    onCompleted,\n    activeStep,\n    navigateToStep\n  }} />;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Interactive_Form_Reading.parameters=CandidateFormScreen_interactive_stories_objectSpread(CandidateFormScreen_interactive_stories_objectSpread({},Interactive_Form_Reading.parameters),{},{docs:CandidateFormScreen_interactive_stories_objectSpread(CandidateFormScreen_interactive_stories_objectSpread({},null===(_Interactive_Form_Rea=Interactive_Form_Reading.parameters)||void 0===_Interactive_Form_Rea?void 0:_Interactive_Form_Rea.docs),{},{source:CandidateFormScreen_interactive_stories_objectSpread({originalSource:"({\n  onSubmit: baseSubmit,\n  onCompleted,\n  ...args\n}) => {\n  const [activeStep, navigateToStep] = useState(0);\n  const doSubmit = useCallback<StoryProps['onSubmit']>((obj, complete) => {\n    baseSubmit(obj, complete);\n    if (!complete) {\n      navigateToStep(activeStep => activeStep + 1);\n    }\n  }, [baseSubmit]);\n  const {\n    data,\n    reading,\n    reload,\n    onSubmit,\n    saving\n  } = useDataInteractionSimulation<CandidateFormScreenDataDependencies, Candidate>({\n    availableCountries: mockedAvailableCountries,\n    availableCustomQuestions: mockedCustomQuestions,\n    availableJobRoles: mockedJobRoles,\n    candidate: mockedCandidate\n  }, doSubmit, onCompleted);\n  return <CandidateFormScreenInteractive {...args} {...data} {...{\n    reading,\n    reload,\n    saving,\n    onSubmit,\n    onCompleted,\n    activeStep,\n    navigateToStep\n  }} />;\n}"},null===(_Interactive_Form_Rea2=Interactive_Form_Reading.parameters)||void 0===_Interactive_Form_Rea2||null===(_Interactive_Form_Rea3=_Interactive_Form_Rea2.docs)||void 0===_Interactive_Form_Rea3?void 0:_Interactive_Form_Rea3.source)})}),Interactive_Form_FetchingError.parameters=CandidateFormScreen_interactive_stories_objectSpread(CandidateFormScreen_interactive_stories_objectSpread({},Interactive_Form_FetchingError.parameters),{},{docs:CandidateFormScreen_interactive_stories_objectSpread(CandidateFormScreen_interactive_stories_objectSpread({},null===(_Interactive_Form_Fet=Interactive_Form_FetchingError.parameters)||void 0===_Interactive_Form_Fet?void 0:_Interactive_Form_Fet.docs),{},{source:CandidateFormScreen_interactive_stories_objectSpread({originalSource:"({\n  onSubmit: baseSubmit,\n  onCompleted,\n  ...args\n}) => {\n  const [activeStep, navigateToStep] = useState(0);\n  const doSubmit = useCallback<StoryProps['onSubmit']>((obj, complete) => {\n    baseSubmit(obj, complete);\n    if (!complete) {\n      navigateToStep(activeStep => activeStep + 1);\n    }\n  }, [baseSubmit]);\n  const {\n    data,\n    reading,\n    reload,\n    onSubmit,\n    saving\n  } = useDataInteractionSimulation<CandidateFormScreenDataDependencies, Candidate>({\n    availableCountries: mockedAvailableCountries,\n    availableCustomQuestions: mockedCustomQuestions,\n    availableJobRoles: mockedJobRoles,\n    candidate: mockedCandidate\n  }, doSubmit, onCompleted);\n  return <CandidateFormScreenInteractive {...args} {...data} {...{\n    reading,\n    reload,\n    saving,\n    onSubmit,\n    onCompleted,\n    activeStep,\n    navigateToStep\n  }} />;\n}"},null===(_Interactive_Form_Fet2=Interactive_Form_FetchingError.parameters)||void 0===_Interactive_Form_Fet2||null===(_Interactive_Form_Fet3=_Interactive_Form_Fet2.docs)||void 0===_Interactive_Form_Fet3?void 0:_Interactive_Form_Fet3.source)})}),Interactive_Form__Empty_Candidate.parameters=CandidateFormScreen_interactive_stories_objectSpread(CandidateFormScreen_interactive_stories_objectSpread({},Interactive_Form__Empty_Candidate.parameters),{},{docs:CandidateFormScreen_interactive_stories_objectSpread(CandidateFormScreen_interactive_stories_objectSpread({},null===(_Interactive_Form__Em=Interactive_Form__Empty_Candidate.parameters)||void 0===_Interactive_Form__Em?void 0:_Interactive_Form__Em.docs),{},{source:CandidateFormScreen_interactive_stories_objectSpread({originalSource:"({\n  onSubmit: baseSubmit,\n  onCompleted,\n  ...args\n}) => {\n  const [activeStep, navigateToStep] = useState(0);\n  const doSubmit = useCallback<StoryProps['onSubmit']>((obj, complete) => {\n    baseSubmit(obj, complete);\n    if (!complete) {\n      navigateToStep(activeStep => activeStep + 1);\n    }\n  }, [baseSubmit]);\n  const {\n    data,\n    reading,\n    reload,\n    onSubmit,\n    saving\n  } = useDataInteractionSimulation<CandidateFormScreenDataDependencies, Candidate>({\n    availableCountries: mockedAvailableCountries,\n    availableCustomQuestions: mockedCustomQuestions,\n    availableJobRoles: mockedJobRoles,\n    candidate: mockedCandidate\n  }, doSubmit, onCompleted);\n  return <CandidateFormScreenInteractive {...args} {...data} {...{\n    reading,\n    reload,\n    saving,\n    onSubmit,\n    onCompleted,\n    activeStep,\n    navigateToStep\n  }} />;\n}"},null===(_Interactive_Form__Em2=Interactive_Form__Empty_Candidate.parameters)||void 0===_Interactive_Form__Em2||null===(_Interactive_Form__Em3=_Interactive_Form__Em2.docs)||void 0===_Interactive_Form__Em3?void 0:_Interactive_Form__Em3.source)})}),Interactive_Form__Returning_Candidate.parameters=CandidateFormScreen_interactive_stories_objectSpread(CandidateFormScreen_interactive_stories_objectSpread({},Interactive_Form__Returning_Candidate.parameters),{},{docs:CandidateFormScreen_interactive_stories_objectSpread(CandidateFormScreen_interactive_stories_objectSpread({},null===(_Interactive_Form__Re=Interactive_Form__Returning_Candidate.parameters)||void 0===_Interactive_Form__Re?void 0:_Interactive_Form__Re.docs),{},{source:CandidateFormScreen_interactive_stories_objectSpread({originalSource:"({\n  onSubmit: baseSubmit,\n  onCompleted,\n  ...args\n}) => {\n  const [activeStep, navigateToStep] = useState(0);\n  const doSubmit = useCallback<StoryProps['onSubmit']>((obj, complete) => {\n    baseSubmit(obj, complete);\n    if (!complete) {\n      navigateToStep(activeStep => activeStep + 1);\n    }\n  }, [baseSubmit]);\n  const {\n    data,\n    reading,\n    reload,\n    onSubmit,\n    saving\n  } = useDataInteractionSimulation<CandidateFormScreenDataDependencies, Candidate>({\n    availableCountries: mockedAvailableCountries,\n    availableCustomQuestions: mockedCustomQuestions,\n    availableJobRoles: mockedJobRoles,\n    candidate: mockedCandidate\n  }, doSubmit, onCompleted);\n  return <CandidateFormScreenInteractive {...args} {...data} {...{\n    reading,\n    reload,\n    saving,\n    onSubmit,\n    onCompleted,\n    activeStep,\n    navigateToStep\n  }} />;\n}"},null===(_Interactive_Form__Re2=Interactive_Form__Returning_Candidate.parameters)||void 0===_Interactive_Form__Re2||null===(_Interactive_Form__Re3=_Interactive_Form__Re2.docs)||void 0===_Interactive_Form__Re3?void 0:_Interactive_Form__Re3.source)})}),FormStepperTemplate.__docgenInfo={description:"",methods:[],displayName:"FormStepperTemplate"}}}]);