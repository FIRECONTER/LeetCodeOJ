package com.leetcode;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        String testStr = "abcbadser";
        String last = getPalOne(testStr);
        System.out.println(last);
    }
    /*
        第一种做法 找到本字符串与其翻转字符串的所有公共字符串 然后再对字符串进行验证 及是本身字符串是不是中心对称的
    */
    public static String getPalOne(String arg){
        List<String> res = getCommonSubStr(arg);
        if(res == null) return null;
        String longStr = "";
        for(String str: res){
            if(isPal(str) && str.length() >= longStr.length()){
                longStr = str;
            }
        }
        return longStr;
    }

    public static List<String> getCommonSubStr(String str){
        // 如下的方法会导致OOM
        if(str == null || str.length() == 0) return null;
        List<String> list = new ArrayList<>();
        String reverseStr = new StringBuffer(str).reverse().toString();
        // 找到公共的字符串
        for(int i=0; i<str.length(); i++){
            for(int j=0; j<reverseStr.length(); j++) {
                int i_v = i;
                int j_v = j;
                // 建立虚拟游标
                while(i_v< str.length() && j_v<reverseStr.length() && str.charAt(i_v) == reverseStr.charAt(j_v)){
                    i_v++;
                    j_v++;
                }
                if(i_v == i || j_v == j ) continue;
                else{
                    list.add(str.substring(i, i_v));
                }
            }
        }
        return list;
    }

    public static boolean isPal(String s){
        if(s == null || s.length() == 0) return false;
        boolean res = false;
        for(int i=0; i<s.length()/2; i++){
            if(s.charAt(i) == s.charAt(s.length()-1-i)) continue;
			else return false;
        }
        return true;
    }
}
