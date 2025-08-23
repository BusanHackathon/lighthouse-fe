type Props = {
  riskLevel: 'STABLE' | 'MEDIUM_RISK' | 'HIGH_RISK' | 'LOW_RISK';
  transactionGapRate: string;
};

export const RiskInfo = ({ riskLevel, transactionGapRate }: Props) => {
  const getRiskLevelColor = (level: Props['riskLevel']) => {
    switch (level) {
      case 'STABLE':
        return 'bg-green-500';
      case 'LOW_RISK':
        return 'bg-blue-500';
      case 'MEDIUM_RISK':
        return 'bg-yellow-500';
      case 'HIGH_RISK':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getRiskLevelTextColor = (level: Props['riskLevel']) => {
    switch (level) {
      case 'STABLE':
        return 'text-green-600';
      case 'LOW_RISK':
        return 'text-blue-600';
      case 'MEDIUM_RISK':
        return 'text-yellow-600';
      case 'HIGH_RISK':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const riskLevelColor = getRiskLevelColor(riskLevel);
  const riskLevelTextColor = getRiskLevelTextColor(riskLevel);

  return (
    <div className='flex w-fit flex-col gap-2 border-border'>
      <div className='flex items-center gap-2'>
        <span className='font-semibold'>위험도</span>
        <div className={`size-3 rounded-full ${riskLevelColor}`} />
      </div>
      <div className='flex items-center gap-2 font-semibold'>
        <span>거래 괴리율</span>
        <span className={riskLevelTextColor}>{transactionGapRate}</span>
        <span>%</span>
      </div>
    </div>
  );
};
