import { ContainerMarginHelper } from './ContainerMarginHelper';

it ('test expressions lookups', () => {
	expect(ContainerMarginHelper.parseExpression('xs')).toBe(ContainerMarginHelper.sizeLookups.get('xs'));
	expect(ContainerMarginHelper.parseExpression('xs')).not.toBe(ContainerMarginHelper.sizeLookups.get('s'));
	expect(ContainerMarginHelper.parseExpression('s')).toBe(ContainerMarginHelper.sizeLookups.get('s'));
	expect(ContainerMarginHelper.parseExpression('m')).toBe(ContainerMarginHelper.sizeLookups.get('m'));
	expect(ContainerMarginHelper.parseExpression('l')).toBe(ContainerMarginHelper.sizeLookups.get('l'));
	expect(ContainerMarginHelper.parseExpression('xl')).toBe(ContainerMarginHelper.sizeLookups.get('xl'));
	expect(ContainerMarginHelper.parseExpression('0')).toBe(ContainerMarginHelper.sizeLookups.get('0'));
	expect(ContainerMarginHelper.parseExpression('none')).toBe(ContainerMarginHelper.sizeLookups.get('none'));
});

it ('test expressions negative lookups', () => {
	expect(ContainerMarginHelper.parseExpression('-m')).not.toBe(ContainerMarginHelper.sizeLookups.get('m'));
	expect(ContainerMarginHelper.parseExpression('-m')).toBe(-ContainerMarginHelper.sizeLookups.get('m')!);
});

it ('test expressions multiple lookups', () => {
	expect(ContainerMarginHelper.parseExpression('m+m')).toBe(ContainerMarginHelper.sizeLookups.get('m')! + ContainerMarginHelper.sizeLookups.get('m')!);
	expect(ContainerMarginHelper.parseExpression('m-m')).toBe(ContainerMarginHelper.sizeLookups.get('m')! - ContainerMarginHelper.sizeLookups.get('m')!);
	expect(ContainerMarginHelper.parseExpression('-m-m')).toBe(-ContainerMarginHelper.sizeLookups.get('m')! - ContainerMarginHelper.sizeLookups.get('m')!);
	expect(ContainerMarginHelper.parseExpression('m+s-xs')).toBe(ContainerMarginHelper.sizeLookups.get('m')! + ContainerMarginHelper.sizeLookups.get('s')! - ContainerMarginHelper.sizeLookups.get('xs')!);
});

it ('test expressions empty', () => {
	expect(ContainerMarginHelper.parseExpression('')).toBe(0);
	expect(ContainerMarginHelper.parseExpression(' ')).toBe(0);
});

it ('test expressions single numbers', () => {
	expect(ContainerMarginHelper.parseExpression('0')).toBe(0);
	expect(ContainerMarginHelper.parseExpression('10')).toBe(10);
	expect(ContainerMarginHelper.parseExpression('10')).not.toBe(9);
	expect(ContainerMarginHelper.parseExpression('-0')).toBe(0);
	expect(ContainerMarginHelper.parseExpression('-1')).toBe(-1);
	expect(ContainerMarginHelper.parseExpression('--1')).toBe(1);
});

it ('test expressions two numbers', () => {
	expect(ContainerMarginHelper.parseExpression('0+0')).toBe(0);
	expect(ContainerMarginHelper.parseExpression('0+1')).toBe(1);
	expect(ContainerMarginHelper.parseExpression('-0+1')).toBe(1);
	expect(ContainerMarginHelper.parseExpression('-0+0')).toBe(0);
	expect(ContainerMarginHelper.parseExpression('-0-0')).toBe(0);
	expect(ContainerMarginHelper.parseExpression('-1+1')).toBe(0);
	expect(ContainerMarginHelper.parseExpression('1+1')).toBe(2);
	expect(ContainerMarginHelper.parseExpression('1-1')).toBe(0);
	expect(ContainerMarginHelper.parseExpression('-1-1')).toBe(-2);
	expect(ContainerMarginHelper.parseExpression('8+1')).toBe(9);
	expect(ContainerMarginHelper.parseExpression('8-1')).toBe(7);
	expect(ContainerMarginHelper.parseExpression('-8+1')).toBe(-7);
	expect(ContainerMarginHelper.parseExpression('-8-1')).toBe(-9);
});

it ('test expressions lookups and numbers', () => {
	expect(ContainerMarginHelper.parseExpression('m-10')).toBe(ContainerMarginHelper.sizeLookups.get('m')! - 10);
	expect(ContainerMarginHelper.parseExpression('m-10+1')).toBe(ContainerMarginHelper.sizeLookups.get('m')! - 10 + 1);
	expect(ContainerMarginHelper.parseExpression('-m-10+1')).toBe(-ContainerMarginHelper.sizeLookups.get('m')! - 10 + 1);
	expect(ContainerMarginHelper.parseExpression('-m-10-1')).toBe(-ContainerMarginHelper.sizeLookups.get('m')! - 10 - 1);
	expect(ContainerMarginHelper.parseExpression('-m-m-1')).toBe(-ContainerMarginHelper.sizeLookups.get('m')! - ContainerMarginHelper.sizeLookups.get('m')! - 1);
	expect(ContainerMarginHelper.parseExpression('-m-m+1')).toBe(-ContainerMarginHelper.sizeLookups.get('m')! - ContainerMarginHelper.sizeLookups.get('m')! + 1);
	expect(ContainerMarginHelper.parseExpression('s+1-xs-1+2')).toBe(ContainerMarginHelper.sizeLookups.get('s')! + 1 - ContainerMarginHelper.sizeLookups.get('xs')! - 1 + 2);
});

it ('test invalid expressions', () => {
	expect(ContainerMarginHelper.parseExpression('zzz')).toBe(0);
	expect(ContainerMarginHelper.parseExpression('-zzz')).toBe(0);
	expect(ContainerMarginHelper.parseExpression('-zzz-zzz')).toBe(0);
	expect(ContainerMarginHelper.parseExpression('zzz-zzz')).toBe(0);
	expect(ContainerMarginHelper.parseExpression('zzz+zzz')).toBe(0);
});

it ('test invalid expressions mixed with valid', () => {
	expect(ContainerMarginHelper.parseExpression('zzz+1')).toBe(1);
	expect(ContainerMarginHelper.parseExpression('-zzz-1')).toBe(-1);
	expect(ContainerMarginHelper.parseExpression('-zzz-m+1')).toBe(-ContainerMarginHelper.sizeLookups.get('m')! + 1);
	expect(ContainerMarginHelper.parseExpression('-zzz+m+1')).toBe(ContainerMarginHelper.sizeLookups.get('m')! + 1);
	expect(ContainerMarginHelper.parseExpression('1+zzz-zzz+1')).toBe(2);
	expect(ContainerMarginHelper.parseExpression('-1zzz+zzz-1')).toBe(-2);
});
