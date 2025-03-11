import {describe, it, expect, test} from 'vitest';
import {celciusToFahrenheit, fahrenheitToCelcius, fahrenheitToCelsius} from '../src/converter.js';

describe('celciusToFahrenheitel tests', () =>{
    // 0C should be 32F
    it('should convert 0C to 32F', ()=>{
        expect(celciusToFahrenheit(0)).toBe(32);
    });
    // 100C should be 212F
    it('should convert 100C to 212F', ()=>{
        expect(celciusToFahrenheit(100)).toBe(212);
    });
    // "25"C should be 77
    it('should convert 25C  as string to 77F', ()=>{
        expect(celciusToFahrenheit(25)).toBe(77);
    });
    // -40C should be -40F
    it('should convert negative -40C to -40F', ()=>{
        expect(celciusToFahrenheit(-40)).toBe(-40);
    });

    it('should convert negative -30C to -30F', ()=>{
        expect(celciusToFahrenheit(-30)).toBe(-22);
    });

    it('should convert negative -50C to -50F', ()=>{
        expect(celciusToFahrenheit(-50)).toBe(-58);
    });

    it('should convert 25C to 82F', ()=>{
        expect(celciusToFahrenheit(-25)).toBe(-13);
    });

    it('should convert 0C to 32F', ()=>{
        expect(celciusToFahrenheit(0)).toBe(32);
    });

    it('should convert 365C to 689F', ()=>{
        expect(celciusToFahrenheit(365)).toBe(689);
    });


});



describe('fahrenheitToCelciues tests',() =>{
    it('should convert 75F to 24', ()=> {
        expect(fahrenheitToCelsius(75)).toBe(24)
    });

    it('should convert 6743F to 7328C', ()=> {
        expect(fahrenheitToCelsius(6743)).toBe(3728)
    });

    it('should convert 0F to -18C', ()=> {
        expect(fahrenheitToCelsius(0)).toBe(-18)
    });

    it('should convert -45F to -43C', ()=> {
        expect(fahrenheitToCelsius(-45)).toBe(-43)
    });

    it('should convert -89F to -67C', ()=> {
        expect(fahrenheitToCelsius(-89)).toBe(-67)
    });


    it('should convert -986F to -566C', ()=> {
        expect(fahrenheitToCelsius(-986)).toBe(-566)
    });

    it('should convert 123456F to 68604C ', ()=> {
        expect(fahrenheitToCelsius(123456)).toBe(68569)
    });
 
 

});

