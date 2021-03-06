import { NgModule } from '@angular/core';
import { NtmCoreComponent } from './ntm-core.component';
import { CpfMaskDirective } from './directives/cpf-mask.directive';
import { InstagramMaskDirective } from './directives/instagram-mask.directive';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { TwitterMaskDirective } from './directives/twitter-mask.directive';
import { DifferenceTimePipe } from './pipes/difference-time.pipe';
import { NumberToMonthPipe } from './pipes/number-to-month.pipe';
import { FirstAndLastNamePipe } from './pipes/first-and-last-name.pipe';
import { ZipCodeMaskDirective } from './directives/zip-code-mask.directive';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { ShimmerDirective } from './directives/shimmer.directive';
import { CnpjMaskDirective } from './directives/cnpj-mask.directive';

@NgModule({
  declarations: [
    NtmCoreComponent,
    CpfMaskDirective,
    InstagramMaskDirective,
    PhoneMaskDirective,
    TwitterMaskDirective,
    DifferenceTimePipe,
    FirstAndLastNamePipe,
    NumberToMonthPipe,
    ZipCodeMaskDirective,
    OnlyNumbersDirective,
    ShimmerDirective,
    CnpjMaskDirective,
  ],
  imports: [],
  exports: [
    NtmCoreComponent,
    CpfMaskDirective,
    InstagramMaskDirective,
    PhoneMaskDirective,
    TwitterMaskDirective,
    DifferenceTimePipe,
    FirstAndLastNamePipe,
    NumberToMonthPipe,
    ZipCodeMaskDirective,
    OnlyNumbersDirective,
    ShimmerDirective,
    CnpjMaskDirective,
  ],
})
export class NtmCoreModule {}
