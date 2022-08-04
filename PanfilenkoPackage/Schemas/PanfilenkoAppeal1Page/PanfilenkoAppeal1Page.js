define("PanfilenkoAppeal1Page", [], function() {
	return {
		entitySchemaName: "PanfilenkoAppeal",
		//PanfilenkoAppealTest
		attributes: {
				"PanfilenkoAppealServiceMain": { 
                "dataValueType": Terrasoft.DataValueType.LOOKUP, 
                "lookupListConfig": { 
                    "filters": [ 
                        function() { 
       						var IdService = this.get("PanfilenkoAppealCategory"); 
                            var filterGroup = Ext.create("Terrasoft.FilterGroup"); 
       					if (IdService){ 
                            filterGroup.add("IsActiveService", 
                                Terrasoft.createColumnFilterWithParameter( 
                                    Terrasoft.ComparisonType.EQUAL, 
                                    "[PanfilenkoServiceCatalog:Id].PanfilenkoCategory", 
                                    IdService.value)); 
                            return filterGroup;} 
          					
                        } 
                    ] 
                } 
            },
															
			"PanfilenkoAppealCategory":{
				"dataValueType": Terrasoft.DataValueType.LOOKUP
			}
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "PanfilenkoAppealFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "PanfilenkoAppeal"
				}
			},
			"PanfilenkoTicket": {
				"schemaName": "PanfilenkoSchemafb4aa6ebDetail",
				"entitySchemaName": "PanfilenkoTicketsDetail",
				"filter": {
					"detailColumn": "PanfilenkoPanfilenkoAppeal",
					"masterColumn": "Id"
				}
			},
			"FileDetailAppeal": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "PanfilenkoAppealFile",
				"filter": {
					"detailColumn": "PanfilenkoAppeal",
					"masterColumn": "Id"
				}
			},
			"VisaDetailV277a6df16": {
				"schemaName": "VisaDetailV2",
				"entitySchemaName": "PanfilenkoAppealVisa",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "PanfilenkoAppeal"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"CreatedOn": {
				"187a5e0f-a2f7-4892-a318-29ca365ead9d": {
					"uId": "187a5e0f-a2f7-4892-a318-29ca365ead9d",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 6,
							"formula": {
								"type": 2,
								"dataType": 7,
								"code": "GETDATE",
								"arguments": []
							}
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "CreatedOn"
							}
						}
					]
				}
			},
			"PanfilenkoDateOfStart": {
				"bda09c57-0823-40bc-87ab-acf53ae91c38": {
					"uId": "bda09c57-0823-40bc-87ab-acf53ae91c38",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 6,
							"formula": {
								"type": 2,
								"dataType": 7,
								"code": "GETDATE",
								"arguments": []
							}
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "PanfilenkoStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "bc509f63-82f0-4732-9d7c-4ddb40450a4e",
								"dataValueType": 10
							}
						}
					]
				},
				"e9a357ed-a3a2-4cfd-9cba-37cb28e0f89c": {
					"uId": "e9a357ed-a3a2-4cfd-9cba-37cb28e0f89c",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "PanfilenkoDateOfStart"
							}
						}
					]
				}
			},
			"PanfilenkoResponsible": {
				"5381a29c-6464-43a7-bd00-4cb351687606": {
					"uId": "5381a29c-6464-43a7-bd00-4cb351687606",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "PanfilenkoStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "04fe7152-4b44-4baa-8759-9a1037b086a4",
								"dataValueType": 10
							}
						}
					]
				},
				"beeb6a02-36d7-439c-91bd-38ad87607071": {
					"uId": "beeb6a02-36d7-439c-91bd-38ad87607071",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "Type",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "60733efc-f36b-1410-a883-16d83cab0980",
					"dataValueType": 10
				}
			},
			"PanfilenkoComment": {
				"a573d394-c556-44c6-98dd-585c373444c8": {
					"uId": "a573d394-c556-44c6-98dd-585c373444c8",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "PanfilenkoAppealServiceMain"
							}
						}
					]
				}
			},
			"PanfilenkoService": {
				"682ab12a-8aef-496a-96e5-851d7805dd93": {
					"uId": "682ab12a-8aef-496a-96e5-851d7805dd93",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "PanfilenkoStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "8b33bbcf-5b00-4d29-827a-586a34b08f71",
								"dataValueType": 10
							}
						}
					]
				},
				"38735477-012c-42d0-b494-71b872358741": {
					"uId": "38735477-012c-42d0-b494-71b872358741",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "PanfilenkoStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "8b33bbcf-5b00-4d29-827a-586a34b08f71",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"PanfilenkoAppealService": {
				"07d8e115-8c7b-49ef-b451-03768e2fa838": {
					"uId": "07d8e115-8c7b-49ef-b451-03768e2fa838",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "PanfilenkoStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "8b33bbcf-5b00-4d29-827a-586a34b08f71",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"PanfilenkoAppealServiceMain": {
				"69449b29-991c-433e-abc2-bab1473ecc4c": {
					"uId": "69449b29-991c-433e-abc2-bab1473ecc4c",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "PanfilenkoStatusesOfServise",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "49d5f6ff-7798-4ede-9d91-649c52af83f6",
					"dataValueType": 10
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			testFunction: function(){
				
			},
			onEntityInitialized: function() {
				this.callParent(arguments);
				this.testFunction();
					
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "PanfilenkoInteger195f10733-aa89-481a-8a7c-5d2a511ec352",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "PanfilenkoInteger1",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING7134933c-cb57-4aeb-9221-6250413968b1",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "PanfilenkoTopic",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CreatedBy653a9aa7-dea1-4dae-8e53-b6c380255e0e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "CreatedBy",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP8e7939ed-a499-41d9-9995-5cf524790e79",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "PanfilenkoResponsible",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPfd01e1cb-a018-4d07-9c6e-eb43f3b527a0",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "PanfilenkoInitiator",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUPa8b97b05-90e9-4bd3-bce5-5dfd77c1057f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "PanfilenkoStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "PanfilenkoAppealService79ce6b9e-fabc-43ab-9740-a78211793382",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "PanfilenkoAppealCategory",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "LOOKUPe89c7ddc-0430-4673-95d1-0bfd0d4e73fd",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "PanfilenkoAppealServiceMain",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "STRINGcdca0f64-a3fb-424c-8feb-372548ae473d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "PanfilenkoComment",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "FLOAT2d1ec205-7e1c-4bb8-80bf-72a45d063b41",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "PanfilenkoAppealTotalAmount",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "FLOATd4cb02d0-f023-490f-8aa0-5a7be68405fd",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "PanfilenkoAppealMostExpensiveTicket",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "PanfilenkoTicketAverageCostbac20c37-e065-4e15-97ed-7295d3a3e931",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "PanfilenkoTicketAverageCost"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "PanfilenkoNamee6fb7da6-2672-45ea-8562-2d4918dbe5ee",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 12,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "PanfilenkoAppealTest",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "CreatedOnc0f1775c-709f-4a01-ab13-99aaf766e1ed",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "CreatedOn",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PanfilenkoDateOfStart10582fc9-3422-42f6-ab2d-2d22d9ef49b2",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "PanfilenkoDateOfStart",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabMain",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabMainTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PanfilenkoTicket",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabMain",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FileDetailAppeal",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabMain",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab2026fc65TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabVisaCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "VisaDetailV277a6df16",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab2026fc65TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "remove",
				"name": "ESNTab"
			},
			{
				"operation": "remove",
				"name": "ESNFeedContainer"
			},
			{
				"operation": "remove",
				"name": "ESNFeed"
			}
		]/**SCHEMA_DIFF*/
	};
});
