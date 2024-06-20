/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.13
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */


// Making aliases to reduce chance of accidental name collision
import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$
} from '@fluencelabs/js-client';


// Functions
export const helloWorldRemote_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "name") [] -name-arg-)
   )
   (xor
    (seq
     (seq
      (call -relay- ("op" "concat_strings") ["Hello, " -name-arg-] ret)
      (call -relay- ("op" "concat_strings") [ret "! From "] ret-0)
     )
     (call -relay- ("op" "concat_strings") [ret-0 -relay-] ret-1)
    )
    (fail :error:)
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret-1])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function helloWorldRemote(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "helloWorldRemote",
    "arrow": {
        "domain": {
            "fields": {
                "name": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "string",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        helloWorldRemote_script
    );
}

export const showSubnet_script = `
(xor
 (new $services
  (seq
   (seq
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
            (new $option-inline
             (seq
              (xor
               (seq
                (new %MyDeployment_obj_map
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (ap ("chainNetworkId" 2358716091832359) %MyDeployment_obj_map)
                       (ap ("dealId" "163f844117a55c7caa36c7329a2549c7faf98c83") %MyDeployment_obj_map)
                      )
                      (ap ("dealIdOriginal" "0x163f844117a55c7cAa36C7329a2549C7faf98C83") %MyDeployment_obj_map)
                     )
                     (ap ("definition" "bafkreihb4u3ejvqho7guqqzi4sm6jf6thpeopuuttv4stvrsowhrfwjyba") %MyDeployment_obj_map)
                    )
                    (ap ("matched" true) %MyDeployment_obj_map)
                   )
                   (ap ("timestamp" "2024-06-20T16:22:35.653Z") %MyDeployment_obj_map)
                  )
                  (canon %init_peer_id% %MyDeployment_obj_map  MyDeployment_obj)
                 )
                )
                (ap MyDeployment_obj $option-inline)
               )
               (null)
              )
              (canon %init_peer_id% $option-inline  #option-inline-0)
             )
            )
           )
           (new %Deals_obj_map
            (seq
             (ap ("myDeployment" #option-inline-0) %Deals_obj_map)
             (canon %init_peer_id% %Deals_obj_map  Deals_obj)
            )
           )
          )
          (ap Deals_obj.$.myDeployment Deals_obj_flat)
         )
         (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
        )
        (xor
         (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
         (fail :error:)
        )
       )
       (new -if-error-
        (xor
         (seq
          (match ret.$.success false
           (seq
            (new $array-inline
             (seq
              (seq
               (ap "Failed to resolve subnet: " $array-inline)
               (ap ret.$.error $array-inline)
              )
              (canon %init_peer_id% $array-inline  #array-inline-0)
             )
            )
            (call %init_peer_id% ("run-console" "print") [#array-inline-0])
           )
          )
          (new $-hop-
           (new #-hopc-
            (canon -relay- $-hop-  #-hopc-)
           )
          )
         )
         (seq
          (seq
           (ap :error: -if-error-)
           (xor
            (seq
             (match :error:.$.error_code 10001
              (null)
             )
             (new $-hop-
              (new #-hopc-
               (canon -relay- $-hop-  #-hopc-)
              )
             )
            )
            (fail -if-error-)
           )
          )
          (new $-hop-
           (new #-hopc-
            (canon -relay- $-hop-  #-hopc-)
           )
          )
         )
        )
       )
      )
      (fold ret.$.workers w-0
       (seq
        (new -if-else-error-
         (new -else-error-
          (new -if-error-
           (xor
            (mismatch w-0.$.worker_id []
             (new $services_aliases
              (new $spells_aliases
               (xor
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (new $-hop-
                         (new #-hopc-
                          (canon -relay- $-hop-  #-hopc-)
                         )
                        )
                        (new $-hop-
                         (new #-hopc-
                          (canon w-0.$.host_id $-hop-  #-hopc-)
                         )
                        )
                       )
                       (call w-0.$.worker_id.[0] ("srv" "list") [] ret-0)
                      )
                      (fold ret-0 s-0
                       (seq
                        (seq
                         (seq
                          (seq
                           (ap s-0.$.aliases s-0_flat)
                           (ap s-0_flat s-0_flat_to_functor)
                          )
                          (ap s-0_flat_to_functor.length s-0_flat_length)
                         )
                         (new -if-error-
                          (xor
                           (mismatch s-0_flat_length 0
                            (seq
                             (new -if-error-
                              (xor
                               (match s-0.$.service_type "spell"
                                (ap s-0.$.aliases.[0] $spells_aliases)
                               )
                               (seq
                                (ap :error: -if-error-)
                                (xor
                                 (match :error:.$.error_code 10001
                                  (null)
                                 )
                                 (fail -if-error-)
                                )
                               )
                              )
                             )
                             (new -if-error-
                              (xor
                               (match s-0.$.service_type "service"
                                (ap s-0.$.aliases.[0] $services_aliases)
                               )
                               (seq
                                (ap :error: -if-error-)
                                (xor
                                 (match :error:.$.error_code 10001
                                  (null)
                                 )
                                 (fail -if-error-)
                                )
                               )
                              )
                             )
                            )
                           )
                           (seq
                            (ap :error: -if-error-)
                            (xor
                             (match :error:.$.error_code 10002
                              (null)
                             )
                             (fail -if-error-)
                            )
                           )
                          )
                         )
                        )
                        (next s-0)
                       )
                       (null)
                      )
                     )
                     (par
                      (new $option-inline-1
                       (seq
                        (xor
                         (seq
                          (canon w-0.$.worker_id.[0] $services_aliases  #push-to-stream-119)
                          (ap #push-to-stream-119 $option-inline-1)
                         )
                         (null)
                        )
                        (canon w-0.$.worker_id.[0] $option-inline-1  #option-inline-1-0)
                       )
                      )
                      (new $option-inline-2
                       (seq
                        (xor
                         (seq
                          (canon w-0.$.worker_id.[0] $spells_aliases  #push-to-stream-124)
                          (ap #push-to-stream-124 $option-inline-2)
                         )
                         (null)
                        )
                        (canon w-0.$.worker_id.[0] $option-inline-2  #option-inline-2-0)
                       )
                      )
                     )
                    )
                    (new %WorkerServices_obj_map
                     (seq
                      (seq
                       (seq
                        (seq
                         (ap ("host_id" w-0.$.host_id) %WorkerServices_obj_map)
                         (ap ("services" #option-inline-1-0) %WorkerServices_obj_map)
                        )
                        (ap ("spells" #option-inline-2-0) %WorkerServices_obj_map)
                       )
                       (ap ("worker_id" w-0.$.worker_id) %WorkerServices_obj_map)
                      )
                      (canon w-0.$.worker_id.[0] %WorkerServices_obj_map  WorkerServices_obj)
                     )
                    )
                   )
                   (ap WorkerServices_obj $services)
                  )
                  (new $-hop-
                   (new #-hopc-
                    (canon w-0.$.host_id $-hop-  #-hopc-)
                   )
                  )
                 )
                 (new $-hop-
                  (new #-hopc-
                   (canon -relay- $-hop-  #-hopc-)
                  )
                 )
                )
                (seq
                 (seq
                  (seq
                   (new $-hop-
                    (new #-hopc-
                     (canon w-0.$.host_id $-hop-  #-hopc-)
                    )
                   )
                   (new $-hop-
                    (new #-hopc-
                     (canon -relay- $-hop-  #-hopc-)
                    )
                   )
                  )
                  (new $-hop-
                   (new #-hopc-
                    (canon %init_peer_id% $-hop-  #-hopc-)
                   )
                  )
                 )
                 (fail :error:)
                )
               )
              )
             )
            )
            (seq
             (ap :error: -if-error-)
             (xor
              (match :error:.$.error_code 10002
               (seq
                (new %WorkerServices_obj-0_map
                 (seq
                  (seq
                   (seq
                    (seq
                     (ap ("host_id" w-0.$.host_id) %WorkerServices_obj-0_map)
                     (ap ("services" []) %WorkerServices_obj-0_map)
                    )
                    (ap ("spells" []) %WorkerServices_obj-0_map)
                   )
                   (ap ("worker_id" []) %WorkerServices_obj-0_map)
                  )
                  (canon %init_peer_id% %WorkerServices_obj-0_map  WorkerServices_obj-0)
                 )
                )
                (ap WorkerServices_obj-0 $services)
               )
              )
              (seq
               (seq
                (ap :error: -else-error-)
                (xor
                 (match :error:.$.error_code 10001
                  (ap -if-error- -if-else-error-)
                 )
                 (ap -else-error- -if-else-error-)
                )
               )
               (fail -if-else-error-)
              )
             )
            )
           )
          )
         )
        )
        (next w-0)
       )
       (null)
      )
     )
     (canon %init_peer_id% $services  #-services-fix-0)
    )
    (ap #-services-fix-0 -services-flat-0)
   )
   (call %init_peer_id% ("callbackSrv" "response") [-services-flat-0])
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function showSubnet(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "showSubnet",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "WorkerServices",
                        "fields": {
                            "host_id": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "services": {
                                "type": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "tag": "option"
                            },
                            "spells": {
                                "type": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "tag": "option"
                            },
                            "worker_id": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "option"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        showSubnet_script
    );
}

export const showDeploymentDetails_script = `
(xor
 (new $info
  (new $workersInfo
   (seq
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
           (new $option-inline
            (seq
             (xor
              (seq
               (new %MyDeployment_obj_map
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (ap ("chainNetworkId" 2358716091832359) %MyDeployment_obj_map)
                      (ap ("dealId" "163f844117a55c7caa36c7329a2549c7faf98c83") %MyDeployment_obj_map)
                     )
                     (ap ("dealIdOriginal" "0x163f844117a55c7cAa36C7329a2549C7faf98C83") %MyDeployment_obj_map)
                    )
                    (ap ("definition" "bafkreihb4u3ejvqho7guqqzi4sm6jf6thpeopuuttv4stvrsowhrfwjyba") %MyDeployment_obj_map)
                   )
                   (ap ("matched" true) %MyDeployment_obj_map)
                  )
                  (ap ("timestamp" "2024-06-20T16:22:35.653Z") %MyDeployment_obj_map)
                 )
                 (canon %init_peer_id% %MyDeployment_obj_map  MyDeployment_obj)
                )
               )
               (ap MyDeployment_obj $option-inline)
              )
              (null)
             )
             (canon %init_peer_id% $option-inline  #option-inline-0)
            )
           )
          )
          (new %Deals_obj_map
           (seq
            (ap ("myDeployment" #option-inline-0) %Deals_obj_map)
            (canon %init_peer_id% %Deals_obj_map  Deals_obj)
           )
          )
         )
         (ap Deals_obj.$.myDeployment Deals_obj_flat)
        )
        (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
       )
       (xor
        (seq
         (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
         (new -if-else-error-
          (new -else-error-
           (new -if-error-
            (xor
             (match ret.$.success true
              (seq
               (seq
                (fold ret.$.workers w-0
                 (seq
                  (seq
                   (new %WorkerInfo_obj_map
                    (seq
                     (seq
                      (ap ("hostId" w-0.$.host_id) %WorkerInfo_obj_map)
                      (ap ("workerId" w-0.$.worker_id) %WorkerInfo_obj_map)
                     )
                     (canon -relay- %WorkerInfo_obj_map  WorkerInfo_obj)
                    )
                   )
                   (ap WorkerInfo_obj $workersInfo)
                  )
                  (next w-0)
                 )
                 (null)
                )
                (new %DeploymentDetails_obj_map
                 (seq
                  (seq
                   (seq
                    (seq
                     (canon -relay- $workersInfo  #workersInfo_canon)
                     (ap ("dealId" Deals_obj_flat_flat) %DeploymentDetails_obj_map)
                    )
                    (ap ("error" []) %DeploymentDetails_obj_map)
                   )
                   (ap ("workers" #workersInfo_canon) %DeploymentDetails_obj_map)
                  )
                  (canon -relay- %DeploymentDetails_obj_map  DeploymentDetails_obj)
                 )
                )
               )
               (ap DeploymentDetails_obj $info)
              )
             )
             (seq
              (ap :error: -if-error-)
              (xor
               (match :error:.$.error_code 10001
                (seq
                 (new %DeploymentDetails_obj-0_map
                  (seq
                   (seq
                    (seq
                     (ap ("dealId" Deals_obj_flat_flat) %DeploymentDetails_obj-0_map)
                     (ap ("error" ret.$.error) %DeploymentDetails_obj-0_map)
                    )
                    (ap ("workers" []) %DeploymentDetails_obj-0_map)
                   )
                   (canon -relay- %DeploymentDetails_obj-0_map  DeploymentDetails_obj-0)
                  )
                 )
                 (ap DeploymentDetails_obj-0 $info)
                )
               )
               (seq
                (seq
                 (ap :error: -else-error-)
                 (xor
                  (seq
                   (match :error:.$.error_code 10001
                    (ap -if-error- -if-else-error-)
                   )
                   (new $-hop-
                    (new #-hopc-
                     (canon -relay- $-hop-  #-hopc-)
                    )
                   )
                  )
                  (seq
                   (ap -else-error- -if-else-error-)
                   (new $-hop-
                    (new #-hopc-
                     (canon -relay- $-hop-  #-hopc-)
                    )
                   )
                  )
                 )
                )
                (fail -if-else-error-)
               )
              )
             )
            )
           )
          )
         )
        )
        (fail :error:)
       )
      )
      (canon %init_peer_id% $info  #-info-fix-0)
     )
     (ap #-info-fix-0 -info-flat-0)
    )
    (call %init_peer_id% ("callbackSrv" "response") [-info-flat-0])
   )
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function showDeploymentDetails(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "showDeploymentDetails",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "DeploymentDetails",
                        "fields": {
                            "dealId": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "error": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "option"
                            },
                            "workers": {
                                "type": {
                                    "name": "WorkerInfo",
                                    "fields": {
                                        "hostId": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "workerId": {
                                            "type": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "tag": "option"
                                        }
                                    },
                                    "tag": "struct"
                                },
                                "tag": "array"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        showDeploymentDetails_script
    );
}

export const runDeployedServices_script = `
(xor
 (new $answers
  (seq
   (seq
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
            (new $option-inline
             (seq
              (xor
               (seq
                (new %MyDeployment_obj_map
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (ap ("chainNetworkId" 2358716091832359) %MyDeployment_obj_map)
                       (ap ("dealId" "163f844117a55c7caa36c7329a2549c7faf98c83") %MyDeployment_obj_map)
                      )
                      (ap ("dealIdOriginal" "0x163f844117a55c7cAa36C7329a2549C7faf98C83") %MyDeployment_obj_map)
                     )
                     (ap ("definition" "bafkreihb4u3ejvqho7guqqzi4sm6jf6thpeopuuttv4stvrsowhrfwjyba") %MyDeployment_obj_map)
                    )
                    (ap ("matched" true) %MyDeployment_obj_map)
                   )
                   (ap ("timestamp" "2024-06-20T16:22:35.653Z") %MyDeployment_obj_map)
                  )
                  (canon %init_peer_id% %MyDeployment_obj_map  MyDeployment_obj)
                 )
                )
                (ap MyDeployment_obj $option-inline)
               )
               (null)
              )
              (canon %init_peer_id% $option-inline  #option-inline-0)
             )
            )
           )
           (new %Deals_obj_map
            (seq
             (ap ("myDeployment" #option-inline-0) %Deals_obj_map)
             (canon %init_peer_id% %Deals_obj_map  Deals_obj)
            )
           )
          )
          (ap Deals_obj.$.myDeployment Deals_obj_flat)
         )
         (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
        )
        (xor
         (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
         (fail :error:)
        )
       )
       (new -if-error-
        (xor
         (match ret.$.success false
          (seq
           (new $array-inline
            (seq
             (seq
              (ap "Failed to resolve subnet: " $array-inline)
              (ap ret.$.error $array-inline)
             )
             (canon %init_peer_id% $array-inline  #array-inline-0)
            )
           )
           (call %init_peer_id% ("run-console" "print") [#array-inline-0])
          )
         )
         (seq
          (ap :error: -if-error-)
          (xor
           (match :error:.$.error_code 10001
            (null)
           )
           (fail -if-error-)
          )
         )
        )
       )
      )
      (fold ret.$.workers w-0
       (seq
        (new -if-else-error-
         (new -else-error-
          (new -if-error-
           (xor
            (match w-0.$.worker_id []
             (seq
              (new %Answer_obj_map
               (seq
                (seq
                 (ap ("answer" []) %Answer_obj_map)
                 (ap ("worker" w-0) %Answer_obj_map)
                )
                (canon %init_peer_id% %Answer_obj_map  Answer_obj)
               )
              )
              (ap Answer_obj $answers)
             )
            )
            (seq
             (ap :error: -if-error-)
             (xor
              (match :error:.$.error_code 10001
               (xor
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (new $-hop-
                        (new #-hopc-
                         (canon -relay- $-hop-  #-hopc-)
                        )
                       )
                       (new $-hop-
                        (new #-hopc-
                         (canon w-0.$.host_id $-hop-  #-hopc-)
                        )
                       )
                      )
                      (call w-0.$.worker_id.[0] ("myService" "greeting") ["fluence"] ret-0)
                     )
                     (new $option-inline-1
                      (seq
                       (xor
                        (ap ret-0 $option-inline-1)
                        (null)
                       )
                       (canon w-0.$.worker_id.[0] $option-inline-1  #option-inline-1-0)
                      )
                     )
                    )
                    (new %Answer_obj-0_map
                     (seq
                      (seq
                       (ap ("answer" #option-inline-1-0) %Answer_obj-0_map)
                       (ap ("worker" w-0) %Answer_obj-0_map)
                      )
                      (canon w-0.$.worker_id.[0] %Answer_obj-0_map  Answer_obj-0)
                     )
                    )
                   )
                   (ap Answer_obj-0 $answers)
                  )
                  (new $-hop-
                   (new #-hopc-
                    (canon w-0.$.host_id $-hop-  #-hopc-)
                   )
                  )
                 )
                 (new $-hop-
                  (new #-hopc-
                   (canon -relay- $-hop-  #-hopc-)
                  )
                 )
                )
                (seq
                 (seq
                  (seq
                   (new $-hop-
                    (new #-hopc-
                     (canon w-0.$.host_id $-hop-  #-hopc-)
                    )
                   )
                   (new $-hop-
                    (new #-hopc-
                     (canon -relay- $-hop-  #-hopc-)
                    )
                   )
                  )
                  (new $-hop-
                   (new #-hopc-
                    (canon %init_peer_id% $-hop-  #-hopc-)
                   )
                  )
                 )
                 (fail :error:)
                )
               )
              )
              (seq
               (seq
                (ap :error: -else-error-)
                (xor
                 (match :error:.$.error_code 10001
                  (ap -if-error- -if-else-error-)
                 )
                 (ap -else-error- -if-else-error-)
                )
               )
               (fail -if-else-error-)
              )
             )
            )
           )
          )
         )
        )
        (next w-0)
       )
       (null)
      )
     )
     (canon %init_peer_id% $answers  #-answers-fix-0)
    )
    (ap #-answers-fix-0 -answers-flat-0)
   )
   (call %init_peer_id% ("callbackSrv" "response") [-answers-flat-0])
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function runDeployedServices(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "runDeployedServices",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "Answer",
                        "fields": {
                            "answer": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "option"
                            },
                            "worker": {
                                "name": "Worker",
                                "fields": {
                                    "host_id": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "pat_id": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "worker_id": {
                                        "type": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "tag": "option"
                                    }
                                },
                                "tag": "struct"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        runDeployedServices_script
    );
}

export const helloWorld_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "name") [] -name-arg-)
   )
   (call %init_peer_id% ("op" "concat_strings") ["Hello, " -name-arg-] ret)
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function helloWorld(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "helloWorld",
    "arrow": {
        "domain": {
            "fields": {
                "name": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "string",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        helloWorld_script
    );
}

export const getInfos_script = `
(xor
 (new $infos
  (seq
   (seq
    (seq
     (seq
      (seq
       (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
       (call %init_peer_id% ("getDataSrv" "peers") [] -peers-arg-)
      )
      (fold -peers-arg- p-0
       (seq
        (xor
         (seq
          (seq
           (seq
            (new $-hop-
             (new #-hopc-
              (canon -relay- $-hop-  #-hopc-)
             )
            )
            (call p-0 ("peer" "identify") [] ret)
           )
           (ap ret $infos)
          )
          (new $-hop-
           (new #-hopc-
            (canon -relay- $-hop-  #-hopc-)
           )
          )
         )
         (seq
          (seq
           (new $-hop-
            (new #-hopc-
             (canon -relay- $-hop-  #-hopc-)
            )
           )
           (new $-hop-
            (new #-hopc-
             (canon %init_peer_id% $-hop-  #-hopc-)
            )
           )
          )
          (fail :error:)
         )
        )
        (next p-0)
       )
       (null)
      )
     )
     (canon %init_peer_id% $infos  #-infos-fix-0)
    )
    (ap #-infos-fix-0 -infos-flat-0)
   )
   (call %init_peer_id% ("callbackSrv" "response") [-infos-flat-0])
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function getInfos(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "getInfos",
    "arrow": {
        "domain": {
            "fields": {
                "peers": {
                    "type": {
                        "name": "string",
                        "tag": "scalar"
                    },
                    "tag": "array"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "Info",
                        "fields": {
                            "node_version": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "spell_version": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "external_addresses": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "array"
                            },
                            "allowed_binaries": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "array"
                            },
                            "air_version": {
                                "name": "string",
                                "tag": "scalar"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        getInfos_script
    );
}

export const getInfo_script = `
(xor
 (seq
  (seq
   (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
   (xor
    (call -relay- ("peer" "identify") [] ret)
    (fail :error:)
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret -relay-])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function getInfo(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "getInfo",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "Info",
                    "fields": {
                        "node_version": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "spell_version": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "external_addresses": {
                            "type": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "tag": "array"
                        },
                        "allowed_binaries": {
                            "type": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "tag": "array"
                        },
                        "air_version": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "struct"
                },
                {
                    "name": "string",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        getInfo_script
    );
}

export const showTimeOfSubnetNodes_script = `
(xor
 (new $times
  (seq
   (seq
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
            (new $option-inline
             (seq
              (xor
               (seq
                (new %MyDeployment_obj_map
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (ap ("chainNetworkId" 2358716091832359) %MyDeployment_obj_map)
                       (ap ("dealId" "163f844117a55c7caa36c7329a2549c7faf98c83") %MyDeployment_obj_map)
                      )
                      (ap ("dealIdOriginal" "0x163f844117a55c7cAa36C7329a2549C7faf98C83") %MyDeployment_obj_map)
                     )
                     (ap ("definition" "bafkreihb4u3ejvqho7guqqzi4sm6jf6thpeopuuttv4stvrsowhrfwjyba") %MyDeployment_obj_map)
                    )
                    (ap ("matched" true) %MyDeployment_obj_map)
                   )
                   (ap ("timestamp" "2024-06-20T16:22:35.653Z") %MyDeployment_obj_map)
                  )
                  (canon %init_peer_id% %MyDeployment_obj_map  MyDeployment_obj)
                 )
                )
                (ap MyDeployment_obj $option-inline)
               )
               (null)
              )
              (canon %init_peer_id% $option-inline  #option-inline-0)
             )
            )
           )
           (new %Deals_obj_map
            (seq
             (ap ("myDeployment" #option-inline-0) %Deals_obj_map)
             (canon %init_peer_id% %Deals_obj_map  Deals_obj)
            )
           )
          )
          (ap Deals_obj.$.myDeployment Deals_obj_flat)
         )
         (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
        )
        (xor
         (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
         (fail :error:)
        )
       )
       (new -if-error-
        (xor
         (seq
          (match ret.$.success false
           (seq
            (new $array-inline
             (seq
              (seq
               (ap "Failed to resolve subnet: " $array-inline)
               (ap ret.$.error $array-inline)
              )
              (canon %init_peer_id% $array-inline  #array-inline-0)
             )
            )
            (call %init_peer_id% ("run-console" "print") [#array-inline-0])
           )
          )
          (new $-hop-
           (new #-hopc-
            (canon -relay- $-hop-  #-hopc-)
           )
          )
         )
         (seq
          (seq
           (ap :error: -if-error-)
           (xor
            (seq
             (match :error:.$.error_code 10001
              (null)
             )
             (new $-hop-
              (new #-hopc-
               (canon -relay- $-hop-  #-hopc-)
              )
             )
            )
            (fail -if-error-)
           )
          )
          (new $-hop-
           (new #-hopc-
            (canon -relay- $-hop-  #-hopc-)
           )
          )
         )
        )
       )
      )
      (fold ret.$.workers w-0
       (seq
        (new -if-error-
         (xor
          (mismatch w-0.$.worker_id []
           (xor
            (seq
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (new $-hop-
                   (new #-hopc-
                    (canon -relay- $-hop-  #-hopc-)
                   )
                  )
                  (new $-hop-
                   (new #-hopc-
                    (canon w-0.$.host_id $-hop-  #-hopc-)
                   )
                  )
                 )
                 (call w-0.$.worker_id.[0] ("myService" "get_time_of_node") [] ret-0)
                )
                (new %TimeOfNode_obj_map
                 (seq
                  (seq
                   (seq
                    (ap ("host_id" w-0.$.host_id) %TimeOfNode_obj_map)
                    (ap ("time" ret-0) %TimeOfNode_obj_map)
                   )
                   (ap ("worker_id" w-0.$.worker_id.[0]) %TimeOfNode_obj_map)
                  )
                  (canon w-0.$.worker_id.[0] %TimeOfNode_obj_map  TimeOfNode_obj)
                 )
                )
               )
               (ap TimeOfNode_obj $times)
              )
              (new $-hop-
               (new #-hopc-
                (canon w-0.$.host_id $-hop-  #-hopc-)
               )
              )
             )
             (new $-hop-
              (new #-hopc-
               (canon -relay- $-hop-  #-hopc-)
              )
             )
            )
            (seq
             (seq
              (seq
               (new $-hop-
                (new #-hopc-
                 (canon w-0.$.host_id $-hop-  #-hopc-)
                )
               )
               (new $-hop-
                (new #-hopc-
                 (canon -relay- $-hop-  #-hopc-)
                )
               )
              )
              (new $-hop-
               (new #-hopc-
                (canon %init_peer_id% $-hop-  #-hopc-)
               )
              )
             )
             (fail :error:)
            )
           )
          )
          (seq
           (ap :error: -if-error-)
           (xor
            (match :error:.$.error_code 10002
             (null)
            )
            (fail -if-error-)
           )
          )
         )
        )
        (next w-0)
       )
       (null)
      )
     )
     (canon %init_peer_id% $times  #-times-fix-0)
    )
    (ap #-times-fix-0 -times-flat-0)
   )
   (call %init_peer_id% ("callbackSrv" "response") [-times-flat-0])
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function showTimeOfSubnetNodes(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "showTimeOfSubnetNodes",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "TimeOfNode",
                        "fields": {
                            "host_id": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "time": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "worker_id": {
                                "name": "string",
                                "tag": "scalar"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        showTimeOfSubnetNodes_script
    );
}
