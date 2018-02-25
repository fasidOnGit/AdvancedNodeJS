# AdvancedNodeJS
Learning Advanced Nodejs...


Two core modules available Globally -->  require Module  |  module Module

1.require("something"):

Resolving - to find the absolute file path of the module

Loading - Content of file at the resolved path

Wrapping - gives module it's private scope and what makes require local to every module

Evaluating - VM eventually does with the code Cacheing  - When requiring this module again doesn't need to go through all the above steps

 