import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from "@/components/Layout.vue"
import Nprogress from "nprogress"
Vue.use(VueRouter)

export const routes = [
    {
      path: "*", redirect: "/login"
    },
    {
      path:'/', redirect: '/EvaluationOfWaterInjectionEffect/WaterfloodEffectivenessEvaluation'
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: "/EvaluationOfWaterInjectionEffect",
          name: "EvaluationOfWaterInjectionEffectt",
          component: Layout,
          meta: {
            name: "注水效果评价",
            fullPath: "/EvaluationOfWaterInjectionEffect",
            icon: "el-icon-s-platform"
          },
          children: [
            {
              path: "WaterfloodEffectivenessEvaluation",
              name: "WaterfloodEffectivenessEvaluation",
              component: () => import("@/views/EvaluationOfWaterInjectionEffect/WaterfloodEffectivenessEvaluation/index.vue"),
              meta: {
                name: "注水有效性评价",
                fullPath: "/EvaluationOfWaterInjectionEffect/WaterfloodEffectivenessEvaluation"
              },
            },
            {
              path: "EvaluationOfWellPatternAdaptability",
              name: "EvaluationOfWellPatternAdaptability",
              component: () => import("@/views/EvaluationOfWaterInjectionEffect/EvaluationOfWellPatternAdaptability/index.vue"),
              meta: {
                name: "井网适应性评价",
                fullPath: "/EvaluationOfWaterInjectionEffect/EvaluationOfWellPatternAdaptability"
              },
            },
            {
              path: "RecoveryEvaluation",
              name: "RecoveryEvaluation",
              component: () => import("@/views/EvaluationOfWaterInjectionEffect/RecoveryEvaluation/index.vue"),
              meta: {
                name: "采收率评价",
                fullPath: "/EvaluationOfWaterInjectionEffect/RecoveryEvaluation"
              },
            },
            {
              path: "EffectEvaluationOfSingleWellAndWellGroup",
              name: "EffectEvaluationOfSingleWellAndWellGroup",
              component: () => import("@/views/EvaluationOfWaterInjectionEffect/EffectEvaluationOfSingleWellAndWellGroup/index.vue"),
              meta: {
                name: "单井及井组的效果评价",
                fullPath: "/EvaluationOfWaterInjectionEffect/EffectEvaluationOfSingleWellAndWellGroup"
              },
            },
          ]
        },
        {
          path: "/DetermineTheWaterfloodInterval",
          name: "DetermineTheWaterfloodInterval",
          component: Layout,
          meta: {
            name: "确定注水层段",
            fullPath: "/DetermineTheWaterfloodInterval",
            icon: "el-icon-s-operation"
          },
          children: [
            {
              path: "DetermineTheSegmentProperties",
              name: "DetermineTheSegmentProperties",
              component: () => import("@/views/DetermineTheWaterfloodInterval/DetermineTheSegmentProperties/index.vue"),
              meta: {
                name: "确定层段性质",
                fullPath: "/DetermineTheWaterfloodInterval/DetermineTheSegmentProperties"
              },
            },
            {
              path: "DivideTheWaterfloodInterval",
              name: "DivideTheWaterfloodInterval",
              component: () => import("@/views/DetermineTheWaterfloodInterval/DivideTheWaterfloodInterval/index.vue"),
              meta: {
                name: "划分注水层段",
                fullPath: "/DetermineTheWaterfloodInterval/DivideTheWaterfloodInterval"
              },
            },
          ]
        },
        {
          path: "/CalculationOfDispensingAmount",
          name: "CalculationOfDispensingAmount",
          component: Layout,
          meta: {
            name: "配注量的计算",
            fullPath: "/CalculationOfDispensingAmount",
            icon: "el-icon-s-operation"
          },
          children: [
            {
              path: "BPNeuralNetworkAlgorithm",
              name: "BPNeuralNetworkAlgorithm",
              component: () => import("@/views/CalculationOfDispensingAmount/BPNeuralNetworkAlgorithm/index.vue"),
              meta: {
                name: "BP神经网络算法",
                fullPath: "/CalculationOfDispensingAmount/BPNeuralNetworkAlgorithm"
              },
            },
            {
              path: "SplittingCoefficientMethod",
              name: "SplittingCoefficientMethod",
              component: Layout,
              meta: {
                name: "劈分系数法",
                fullPath: "/CalculationOfDispensingAmount/SplittingCoefficientMethod"
              },
              children: [
                {
                  path: "EffectiveThicknessMethod",
                  name: "EffectiveThicknessMethod",
                  component: () => import("@/views/CalculationOfDispensingAmount/SplittingCoefficientMethod/EffectiveThicknessMethod/index.vue"),
                  meta: {
                    name: "有效厚度法",
                    fullPath: "/CalculationOfDispensingAmount/SplittingCoefficientMethod/EffectiveThicknessMethod"
                  },
                },
                {
                  path: "StaticSplitFormationCoefficientMethod",
                  name: "StaticSplitFormationCoefficientMethod",
                  component: () => import("@/views/CalculationOfDispensingAmount/SplittingCoefficientMethod/StaticSplitFormationCoefficientMethod/index.vue"),
                  meta: {
                    name: "静态劈分地层系数法",
                    fullPath: "/CalculationOfDispensingAmount/SplittingCoefficientMethod/StaticSplitFormationCoefficientMethod"
                  },
                },
                {
                  path: "SuctionProfileCoefficientMethod",
                  name: "SuctionProfileCoefficientMethod",
                  component: () => import("@/views/CalculationOfDispensingAmount/SplittingCoefficientMethod/SuctionProfileCoefficientMethod/index.vue"),
                  meta: {
                    name: "吸水剖面系数法",
                    fullPath: "/CalculationOfDispensingAmount/SplittingCoefficientMethod/SuctionProfileCoefficientMethod"
                  },
                },
                {
                  path: "SeepageResistanceCoefficientMethod",
                  name: "SeepageResistanceCoefficientMethod",
                  component: () => import("@/views/CalculationOfDispensingAmount/SplittingCoefficientMethod/SeepageResistanceCoefficientMethod/index.vue"),
                  meta: {
                    name: "渗流阻力系数法",
                    fullPath: "/CalculationOfDispensingAmount/SplittingCoefficientMethod/SeepageResistanceCoefficientMethod"
                  },
                },
                {
                  path: "ComprehensiveMultifactorSplittingCoefficientMethod",
                  name: "ComprehensiveMultifactorSplittingCoefficientMethod",
                  component: () => import("@/views/CalculationOfDispensingAmount/SplittingCoefficientMethod/ComprehensiveMultifactorSplittingCoefficientMethod/index.vue"),
                  meta: {
                    name: "综合多因素劈分系数法",
                    fullPath: "/CalculationOfDispensingAmount/SplittingCoefficientMethod/ComprehensiveMultifactorSplittingCoefficientMethod"
                  },
                },
                {
                  path: "PressureBalancePositionSplittingCoefficientInjectionMethod",
                  name: "PressureBalancePositionSplittingCoefficientInjectionMethod",
                  component: () => import("@/views/CalculationOfDispensingAmount/SplittingCoefficientMethod/PressureBalancePositionSplittingCoefficientInjectionMethod/index.vue"),
                  meta: {
                    name: "压力平衡位置劈分系数配注法",
                    fullPath: "/CalculationOfDispensingAmount/SplittingCoefficientMethod/PressureBalancePositionSplittingCoefficientInjectionMethod"
                  },
                },
              ]
            },
            {
              path: "SplittingCoefficientCalculation",
              name: "SplittingCoefficientCalculation",
              component: () => import("@/views/CalculationOfDispensingAmount/SplittingCoefficientCalculation/index.vue"),
              meta: {
                name: "劈分系数计算",
                fullPath: "/CalculationOfDispensingAmount/SplittingCoefficientCalculation"
              },
            },
            {
              path: "IntervalDispensingVolumeCalculation",
              name: "IntervalDispensingVolumeCalculation",
              component: () => import("@/views/CalculationOfDispensingAmount/IntervalDispensingVolumeCalculation/index.vue"),
              meta: {
                name: "层段配注量计算",
                fullPath: "/CalculationOfDispensingAmount/IntervalDispensingVolumeCalculation"
              },
            },
          ]
        },
        {
          path: "/AMethodForPredictingThePerformanceOfWaterfloodDevelopment",
          name: "AMethodForPredictingThePerformanceOfWaterfloodDevelopment",
          component: Layout,
          meta: {
            name: "预测注水开发动态的方法",
            fullPath: "/AMethodForPredictingThePerformanceOfWaterfloodDevelopment",
            icon: "el-icon-s-operation"
          },
          children: [
            {
              path: "UltimateWaterfloodRecoveryFactor",
              name: "UltimateWaterfloodRecoveryFactor",
              component: () => import("@/views/AMethodForPredictingThePerformanceOfWaterfloodDevelopment/UltimateWaterfloodRecoveryFactor/index.vue"),
              meta: {
                name: "最终的注水采收率",
                fullPath: "/AMethodForPredictingThePerformanceOfWaterfloodDevelopment/UltimateWaterfloodRecoveryFactor"
              }
            },
            {
              path: "changingSituation",
              name: "changingSituation",
              component: () => import("@/views/AMethodForPredictingThePerformanceOfWaterfloodDevelopment/changingSituation/index.vue"),
              meta: {
                name: "综合的注水和采油速度、水油比和采收率随时间变化情况",
                fullPath: "/AMethodForPredictingThePerformanceOfWaterfloodDevelopment/changingSituation"
              }
            },
            {
              path: "PracticalApplicationOfWaterInjectionPredictionMethod",
              name: "PracticalApplicationOfWaterInjectionPredictionMethod",
              component: () => import("@/views/AMethodForPredictingThePerformanceOfWaterfloodDevelopment/PracticalApplicationOfWaterInjectionPredictionMethod/index.vue"),
              meta: {
                name: "注水预测方法的实际运用",
                fullPath: "/AMethodForPredictingThePerformanceOfWaterfloodDevelopment/PracticalApplicationOfWaterInjectionPredictionMethod"
              }
            },
          ]
        },
        {
          path: "/WaterInjectionOptimizationMethod",
          name: "WaterInjectionOptimizationMethod",
          component: Layout,
          meta: {
            name: "注水优化方法",
            fullPath: "/WaterInjectionOptimizationMethod",
            icon: "el-icon-s-operation"
          },
          children: [
            {
              path: "WaterInjectionGeneratingPressure",
              name: "WaterInjectionGeneratingPressure",
              component: () => import("@/views/WaterInjectionOptimizationMethod/WaterInjectionGeneratingPressure/index.vue"),
              meta: {
                name: "注水产生压力脉冲的方法",
                fullPath: "/WaterInjectionOptimizationMethod/WaterInjectionGeneratingPressure"
              }
            },
            {
              path: "FoamDriveProcess",
              name: "FoamDriveProcess",
              component: () => import("@/views/WaterInjectionOptimizationMethod/FoamDriveProcess/index.vue"),
              meta: {
                name: "泡沫驱油法",
                fullPath: "/WaterInjectionOptimizationMethod/FoamDriveProcess"
              }
            },
            {
              path: "PolymerAddition",
              name: "PolymerAddition",
              component: () => import("@/views/WaterInjectionOptimizationMethod/PolymerAddition/index.vue"),
              meta: {
                name: "添加聚合物",
                fullPath: "/WaterInjectionOptimizationMethod/PolymerAddition"
              }
            },
            {
              path: "CarbonDioxideInjectionMethod",
              name: "CarbonDioxideInjectionMethod",
              component: () => import("@/views/WaterInjectionOptimizationMethod/CarbonDioxideInjectionMethod/index.vue"),
              meta: {
                name: "注入二氧化碳法",
                fullPath: "/WaterInjectionOptimizationMethod/CarbonDioxideInjectionMethod"
              }
            },
            {
              path: "OilDisplacementByInjectingHydrocarbonsAsMiscibleSlug",
              name: "OilDisplacementByInjectingHydrocarbonsAsMiscibleSlug",
              component: () => import("@/views/WaterInjectionOptimizationMethod/OilDisplacementByInjectingHydrocarbonsAsMiscibleSlug/index.vue"),
              meta: {
                name: "注入烃类作为混相段塞的驱油法",
                fullPath: "/WaterInjectionOptimizationMethod/OilDisplacementByInjectingHydrocarbonsAsMiscibleSlug"
              }
            },
            {
              path: "SteamDriveProcess",
              name: "SteamDriveProcess",
              component: () => import("@/views/WaterInjectionOptimizationMethod/SteamDriveProcess/index.vue"),
              meta: {
                name: "蒸汽驱法",
                fullPath: "/WaterInjectionOptimizationMethod/SteamDriveProcess"
              }
            },
          ]
        },
        
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/views/Login/index.vue"),
      meta: {
        name: "登录页",
        fullPath: "/login"
  }
    },
    {
      path: '/registry',
      name: 'registry',
      component: () => import("@/views/Registry/index.vue"),
      meta: {
        name: "注册页",
        fullPath: "/registry"
  }
    },
    
  ]

const router = new VueRouter({
  mode: 'history',
  routes
})
//路由前置守卫
router.beforeEach((from, to, next) => {
  Nprogress.start();
  next();
})

//路由后置守卫
router.afterEach((from, to) => {
  Nprogress.done();
  sessionStorage.removeItem("userInfo")
})

export default router
