/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * see TemplateObject#getParameterRole(int)
 * @class
 */
export class ParameterRole {
    /*private*/ name : string;

    static UNKNOWN : ParameterRole; public static UNKNOWN_$LI$() : ParameterRole { if(ParameterRole.UNKNOWN == null) ParameterRole.UNKNOWN = new ParameterRole("[unknown role]"); return ParameterRole.UNKNOWN; };

    static LEFT_HAND_OPERAND : ParameterRole; public static LEFT_HAND_OPERAND_$LI$() : ParameterRole { if(ParameterRole.LEFT_HAND_OPERAND == null) ParameterRole.LEFT_HAND_OPERAND = new ParameterRole("left-hand operand"); return ParameterRole.LEFT_HAND_OPERAND; };

    static RIGHT_HAND_OPERAND : ParameterRole; public static RIGHT_HAND_OPERAND_$LI$() : ParameterRole { if(ParameterRole.RIGHT_HAND_OPERAND == null) ParameterRole.RIGHT_HAND_OPERAND = new ParameterRole("right-hand operand"); return ParameterRole.RIGHT_HAND_OPERAND; };

    static ENCLOSED_OPERAND : ParameterRole; public static ENCLOSED_OPERAND_$LI$() : ParameterRole { if(ParameterRole.ENCLOSED_OPERAND == null) ParameterRole.ENCLOSED_OPERAND = new ParameterRole("enclosed operand"); return ParameterRole.ENCLOSED_OPERAND; };

    static ITEM_VALUE : ParameterRole; public static ITEM_VALUE_$LI$() : ParameterRole { if(ParameterRole.ITEM_VALUE == null) ParameterRole.ITEM_VALUE = new ParameterRole("item value"); return ParameterRole.ITEM_VALUE; };

    static ITEM_KEY : ParameterRole; public static ITEM_KEY_$LI$() : ParameterRole { if(ParameterRole.ITEM_KEY == null) ParameterRole.ITEM_KEY = new ParameterRole("item key"); return ParameterRole.ITEM_KEY; };

    static ASSIGNMENT_TARGET : ParameterRole; public static ASSIGNMENT_TARGET_$LI$() : ParameterRole { if(ParameterRole.ASSIGNMENT_TARGET == null) ParameterRole.ASSIGNMENT_TARGET = new ParameterRole("assignment target"); return ParameterRole.ASSIGNMENT_TARGET; };

    static ASSIGNMENT_OPERATOR : ParameterRole; public static ASSIGNMENT_OPERATOR_$LI$() : ParameterRole { if(ParameterRole.ASSIGNMENT_OPERATOR == null) ParameterRole.ASSIGNMENT_OPERATOR = new ParameterRole("assignment operator"); return ParameterRole.ASSIGNMENT_OPERATOR; };

    static ASSIGNMENT_SOURCE : ParameterRole; public static ASSIGNMENT_SOURCE_$LI$() : ParameterRole { if(ParameterRole.ASSIGNMENT_SOURCE == null) ParameterRole.ASSIGNMENT_SOURCE = new ParameterRole("assignment source"); return ParameterRole.ASSIGNMENT_SOURCE; };

    static VARIABLE_SCOPE : ParameterRole; public static VARIABLE_SCOPE_$LI$() : ParameterRole { if(ParameterRole.VARIABLE_SCOPE == null) ParameterRole.VARIABLE_SCOPE = new ParameterRole("variable scope"); return ParameterRole.VARIABLE_SCOPE; };

    static NAMESPACE : ParameterRole; public static NAMESPACE_$LI$() : ParameterRole { if(ParameterRole.NAMESPACE == null) ParameterRole.NAMESPACE = new ParameterRole("namespace"); return ParameterRole.NAMESPACE; };

    static ERROR_HANDLER : ParameterRole; public static ERROR_HANDLER_$LI$() : ParameterRole { if(ParameterRole.ERROR_HANDLER == null) ParameterRole.ERROR_HANDLER = new ParameterRole("error handler"); return ParameterRole.ERROR_HANDLER; };

    static PASSED_VALUE : ParameterRole; public static PASSED_VALUE_$LI$() : ParameterRole { if(ParameterRole.PASSED_VALUE == null) ParameterRole.PASSED_VALUE = new ParameterRole("passed value"); return ParameterRole.PASSED_VALUE; };

    static CONDITION : ParameterRole; public static CONDITION_$LI$() : ParameterRole { if(ParameterRole.CONDITION == null) ParameterRole.CONDITION = new ParameterRole("condition"); return ParameterRole.CONDITION; };

    static VALUE : ParameterRole; public static VALUE_$LI$() : ParameterRole { if(ParameterRole.VALUE == null) ParameterRole.VALUE = new ParameterRole("value"); return ParameterRole.VALUE; };

    static AST_NODE_SUBTYPE : ParameterRole; public static AST_NODE_SUBTYPE_$LI$() : ParameterRole { if(ParameterRole.AST_NODE_SUBTYPE == null) ParameterRole.AST_NODE_SUBTYPE = new ParameterRole("AST-node subtype"); return ParameterRole.AST_NODE_SUBTYPE; };

    static PLACEHOLDER_VARIABLE : ParameterRole; public static PLACEHOLDER_VARIABLE_$LI$() : ParameterRole { if(ParameterRole.PLACEHOLDER_VARIABLE == null) ParameterRole.PLACEHOLDER_VARIABLE = new ParameterRole("placeholder variable"); return ParameterRole.PLACEHOLDER_VARIABLE; };

    static EXPRESSION_TEMPLATE : ParameterRole; public static EXPRESSION_TEMPLATE_$LI$() : ParameterRole { if(ParameterRole.EXPRESSION_TEMPLATE == null) ParameterRole.EXPRESSION_TEMPLATE = new ParameterRole("expression template"); return ParameterRole.EXPRESSION_TEMPLATE; };

    static LIST_SOURCE : ParameterRole; public static LIST_SOURCE_$LI$() : ParameterRole { if(ParameterRole.LIST_SOURCE == null) ParameterRole.LIST_SOURCE = new ParameterRole("list source"); return ParameterRole.LIST_SOURCE; };

    static TARGET_LOOP_VARIABLE : ParameterRole; public static TARGET_LOOP_VARIABLE_$LI$() : ParameterRole { if(ParameterRole.TARGET_LOOP_VARIABLE == null) ParameterRole.TARGET_LOOP_VARIABLE = new ParameterRole("target loop variable"); return ParameterRole.TARGET_LOOP_VARIABLE; };

    static TEMPLATE_NAME : ParameterRole; public static TEMPLATE_NAME_$LI$() : ParameterRole { if(ParameterRole.TEMPLATE_NAME == null) ParameterRole.TEMPLATE_NAME = new ParameterRole("template name"); return ParameterRole.TEMPLATE_NAME; };

    static PARSE_PARAMETER : ParameterRole; public static PARSE_PARAMETER_$LI$() : ParameterRole { if(ParameterRole.PARSE_PARAMETER == null) ParameterRole.PARSE_PARAMETER = new ParameterRole("\"parse\" parameter"); return ParameterRole.PARSE_PARAMETER; };

    static ENCODING_PARAMETER : ParameterRole; public static ENCODING_PARAMETER_$LI$() : ParameterRole { if(ParameterRole.ENCODING_PARAMETER == null) ParameterRole.ENCODING_PARAMETER = new ParameterRole("\"encoding\" parameter"); return ParameterRole.ENCODING_PARAMETER; };

    static IGNORE_MISSING_PARAMETER : ParameterRole; public static IGNORE_MISSING_PARAMETER_$LI$() : ParameterRole { if(ParameterRole.IGNORE_MISSING_PARAMETER == null) ParameterRole.IGNORE_MISSING_PARAMETER = new ParameterRole("\"ignore_missing\" parameter"); return ParameterRole.IGNORE_MISSING_PARAMETER; };

    static PARAMETER_NAME : ParameterRole; public static PARAMETER_NAME_$LI$() : ParameterRole { if(ParameterRole.PARAMETER_NAME == null) ParameterRole.PARAMETER_NAME = new ParameterRole("parameter name"); return ParameterRole.PARAMETER_NAME; };

    static PARAMETER_DEFAULT : ParameterRole; public static PARAMETER_DEFAULT_$LI$() : ParameterRole { if(ParameterRole.PARAMETER_DEFAULT == null) ParameterRole.PARAMETER_DEFAULT = new ParameterRole("parameter default"); return ParameterRole.PARAMETER_DEFAULT; };

    static CATCH_ALL_PARAMETER_NAME : ParameterRole; public static CATCH_ALL_PARAMETER_NAME_$LI$() : ParameterRole { if(ParameterRole.CATCH_ALL_PARAMETER_NAME == null) ParameterRole.CATCH_ALL_PARAMETER_NAME = new ParameterRole("catch-all parameter name"); return ParameterRole.CATCH_ALL_PARAMETER_NAME; };

    static ARGUMENT_NAME : ParameterRole; public static ARGUMENT_NAME_$LI$() : ParameterRole { if(ParameterRole.ARGUMENT_NAME == null) ParameterRole.ARGUMENT_NAME = new ParameterRole("argument name"); return ParameterRole.ARGUMENT_NAME; };

    static ARGUMENT_VALUE : ParameterRole; public static ARGUMENT_VALUE_$LI$() : ParameterRole { if(ParameterRole.ARGUMENT_VALUE == null) ParameterRole.ARGUMENT_VALUE = new ParameterRole("argument value"); return ParameterRole.ARGUMENT_VALUE; };

    static CONTENT : ParameterRole; public static CONTENT_$LI$() : ParameterRole { if(ParameterRole.CONTENT == null) ParameterRole.CONTENT = new ParameterRole("content"); return ParameterRole.CONTENT; };

    static EMBEDDED_TEMPLATE : ParameterRole; public static EMBEDDED_TEMPLATE_$LI$() : ParameterRole { if(ParameterRole.EMBEDDED_TEMPLATE == null) ParameterRole.EMBEDDED_TEMPLATE = new ParameterRole("embedded template"); return ParameterRole.EMBEDDED_TEMPLATE; };

    static VALUE_PART : ParameterRole; public static VALUE_PART_$LI$() : ParameterRole { if(ParameterRole.VALUE_PART == null) ParameterRole.VALUE_PART = new ParameterRole("value part"); return ParameterRole.VALUE_PART; };

    static MINIMUM_DECIMALS : ParameterRole; public static MINIMUM_DECIMALS_$LI$() : ParameterRole { if(ParameterRole.MINIMUM_DECIMALS == null) ParameterRole.MINIMUM_DECIMALS = new ParameterRole("minimum decimals"); return ParameterRole.MINIMUM_DECIMALS; };

    static MAXIMUM_DECIMALS : ParameterRole; public static MAXIMUM_DECIMALS_$LI$() : ParameterRole { if(ParameterRole.MAXIMUM_DECIMALS == null) ParameterRole.MAXIMUM_DECIMALS = new ParameterRole("maximum decimals"); return ParameterRole.MAXIMUM_DECIMALS; };

    static NODE : ParameterRole; public static NODE_$LI$() : ParameterRole { if(ParameterRole.NODE == null) ParameterRole.NODE = new ParameterRole("node"); return ParameterRole.NODE; };

    static CALLEE : ParameterRole; public static CALLEE_$LI$() : ParameterRole { if(ParameterRole.CALLEE == null) ParameterRole.CALLEE = new ParameterRole("callee"); return ParameterRole.CALLEE; };

    static MESSAGE : ParameterRole; public static MESSAGE_$LI$() : ParameterRole { if(ParameterRole.MESSAGE == null) ParameterRole.MESSAGE = new ParameterRole("message"); return ParameterRole.MESSAGE; };

    constructor(name : string) {
        if(this.name===undefined) this.name = null;
        this.name = name;
    }

    static forBinaryOperatorOperand(paramIndex : number) : ParameterRole {
        switch((paramIndex)) {
        case 0:
            return ParameterRole.LEFT_HAND_OPERAND_$LI$();
        case 1:
            return ParameterRole.RIGHT_HAND_OPERAND_$LI$();
        default:
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    public getName() : string {
        return this.name;
    }

    /**
     * 
     * @return {String}
     */
    public toString() : string {
        return this.name;
    }
}
ParameterRole["__class"] = "freemarker.core.ParameterRole";





ParameterRole.MESSAGE_$LI$();

ParameterRole.CALLEE_$LI$();

ParameterRole.NODE_$LI$();

ParameterRole.MAXIMUM_DECIMALS_$LI$();

ParameterRole.MINIMUM_DECIMALS_$LI$();

ParameterRole.VALUE_PART_$LI$();

ParameterRole.EMBEDDED_TEMPLATE_$LI$();

ParameterRole.CONTENT_$LI$();

ParameterRole.ARGUMENT_VALUE_$LI$();

ParameterRole.ARGUMENT_NAME_$LI$();

ParameterRole.CATCH_ALL_PARAMETER_NAME_$LI$();

ParameterRole.PARAMETER_DEFAULT_$LI$();

ParameterRole.PARAMETER_NAME_$LI$();

ParameterRole.IGNORE_MISSING_PARAMETER_$LI$();

ParameterRole.ENCODING_PARAMETER_$LI$();

ParameterRole.PARSE_PARAMETER_$LI$();

ParameterRole.TEMPLATE_NAME_$LI$();

ParameterRole.TARGET_LOOP_VARIABLE_$LI$();

ParameterRole.LIST_SOURCE_$LI$();

ParameterRole.EXPRESSION_TEMPLATE_$LI$();

ParameterRole.PLACEHOLDER_VARIABLE_$LI$();

ParameterRole.AST_NODE_SUBTYPE_$LI$();

ParameterRole.VALUE_$LI$();

ParameterRole.CONDITION_$LI$();

ParameterRole.PASSED_VALUE_$LI$();

ParameterRole.ERROR_HANDLER_$LI$();

ParameterRole.NAMESPACE_$LI$();

ParameterRole.VARIABLE_SCOPE_$LI$();

ParameterRole.ASSIGNMENT_SOURCE_$LI$();

ParameterRole.ASSIGNMENT_OPERATOR_$LI$();

ParameterRole.ASSIGNMENT_TARGET_$LI$();

ParameterRole.ITEM_KEY_$LI$();

ParameterRole.ITEM_VALUE_$LI$();

ParameterRole.ENCLOSED_OPERAND_$LI$();

ParameterRole.RIGHT_HAND_OPERAND_$LI$();

ParameterRole.LEFT_HAND_OPERAND_$LI$();

ParameterRole.UNKNOWN_$LI$();
