import { VerticalConfig } from '../vertical.config';

const autoOS: VerticalConfig = {
  id: 'yur-auto-os',
  name: 'YUR Auto OS',
  tagline: 'AI-Powered Vehicle Intelligence & Automotive Management',
  icon: '🚗',
  primaryColor: '#212121',
  accentColor: '#F44336',
  bgGradient: 'linear-gradient(135deg, #212121 0%, #424242 50%, #616161 100%)',
  systemInstruction: `You are YUR Auto OS, an AI-powered automotive management system. You track vehicle maintenance schedules, analyze repair estimates for fairness, monitor vehicle market values, compare insurance rates, and decode diagnostic trouble codes (DTCs). You understand OBD-II systems, manufacturer service intervals, TSBs (technical service bulletins), and recall notices. You compare repair shop quotes, identify unnecessary upsells, and help users make informed buy/sell/trade decisions. Always factor in total cost of ownership — depreciation, fuel, insurance, maintenance, and financing costs.`,
  complianceStandards: [
    'EPA Emissions Standards',
    'NHTSA Safety Standards (FMVSS)',
    'State Vehicle Inspection Requirements',
    'Magnuson-Moss Warranty Act',
    'Lemon Law (State-Specific)',
    'CARB Emissions (California/Adopting States)',
    'OBD-II Standards (SAE J1962)'
  ],
  agents: [
    {
      name: 'VEHICLE_ANALYST',
      role: 'Vehicle Research & Analysis Agent',
      systemPrompt: 'You analyze vehicles for purchase, sale, and trade decisions. Research reliability ratings, common problems by model year, recall history, and TSBs. Compare vehicles across categories using total cost of ownership (depreciation, fuel, insurance, maintenance). Decode VINs for build specifications, decode option packages, and identify fair market pricing using multiple valuation sources (KBB, NADA, Edmunds, market listings).',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'MAINTENANCE_TRACKER',
      role: 'Maintenance Schedule & Repair Intelligence Agent',
      systemPrompt: 'You track vehicle maintenance schedules per manufacturer recommendations and driving conditions (normal vs severe service). Alert users to upcoming service needs, decode OBD-II diagnostic trouble codes, and explain repair procedures. Review repair estimates for accuracy — verify labor times against Mitchell/AllData, check parts pricing against retail/wholesale, and identify unnecessary services. Track maintenance history for warranty compliance and resale documentation.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'MARKET_VALUATOR',
      role: 'Vehicle Market Valuation Agent',
      systemPrompt: 'You track vehicle market values using auction data, dealer listings, and private-party sales. Monitor depreciation curves by make/model/year, identify market timing opportunities, and flag unusually good or bad deals. Analyze local market supply/demand dynamics, seasonal pricing trends, and the impact of mileage, condition, and options on value. Generate comparable market analyses for buying/selling negotiations.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'INSURANCE_OPTIMIZER',
      role: 'Auto Insurance Optimization Agent',
      systemPrompt: 'You compare auto insurance rates across carriers, identify coverage gaps, and recommend optimal coverage levels. Analyze deductible trade-offs, evaluate bundling discounts, and identify available discounts (safe driver, multi-vehicle, low mileage, defensive driving). Track policy renewal dates, compare renewal quotes against competitors, and flag coverage changes. Calculate the cost-benefit of comprehensive vs liability-only for older vehicles.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'Vehicle Valuation APIs',
      type: 'api',
      description: 'KBB, NADA, Edmunds vehicle valuation data and market listings'
    },
    {
      name: 'NHTSA Recall Database',
      type: 'api',
      endpoint: 'https://api.nhtsa.gov/recalls',
      description: 'NHTSA vehicle recalls, complaints, investigations, and TSBs'
    },
    {
      name: 'OBD-II DTC Database',
      type: 'database',
      description: 'Diagnostic trouble code definitions, causes, and repair procedures'
    },
    {
      name: 'Insurance Quote APIs',
      type: 'api',
      description: 'Auto insurance rate comparisons across major carriers by zip code'
    },
    {
      name: 'Maintenance Schedule Data',
      type: 'database',
      description: 'Manufacturer maintenance schedules by make, model, year, and service interval'
    }
  ],
  outputFormats: [
    'Vehicle Comparison Reports',
    'Total Cost of Ownership Analysis',
    'Maintenance Schedule Dashboards',
    'Repair Estimate Reviews',
    'Market Value Appraisals',
    'Insurance Comparison Summaries',
    'DTC Diagnostic Reports',
    'Buy/Sell/Trade Recommendations'
  ],
  defaultModel: 'CORE_FAST',
  features: {
    videoGen: false,
    tts: true,
    imageGen: true,
    maps: true,
    search: true,
    governance: false,
    stripe: true
  }
};

export default autoOS;
