import { ApiModelProperty } from '@nestjs/swagger';
import NetAdjustDesisonRuleSaveParamDto from './NetAdjustDesisonRuleSaveParamDto';

export default class NetAdjustDesisonRuleSaveDto {
  // 这就是一种标记
  @ApiModelProperty({ description: '用户ID', default: 0 })
  UserID: number;
  @ApiModelProperty({ description: '参数列表', default: 0 })
  paramlist: NetAdjustDesisonRuleSaveParamDto[];
}
