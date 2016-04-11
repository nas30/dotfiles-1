(function() {
  var Animal, OPERATOR, grade, heredoc, hi, math, race, square, two,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  grade = function(student, period, messages) {
    if (period == null) {
      period = (typeof b !== "undefined" && b !== null ? 7 : 6);
    }
    if (messages == null) {
      messages = {
        "A": "Excellent"
      };
    }
    if (student.excellentWork) {
      return "A+";
    } else if (student.okayStuff) {
      if (student.triedHard) {
        return "B";
      } else {
        return "B-";
      }
    } else {
      return "C";
    }
  };

  square = function(x) {
    return x * x;
  };

  two = function() {
    return 2;
  };

  math = {
    root: Math.sqrt,
    square: square,
    cube: function(x) {
      return x * square(x);
    }
  };

  race = function() {
    var runners, winner;
    winner = arguments[0], runners = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return print(winner, runners);
  };

  Animal = (function(_super) {
    __extends(Animal, _super);

    function Animal(name) {
      this.name = name;
    }

    Animal.prototype.move = function(meters) {
      return alert(this.name + (" moved " + meters + "m."));
    };

    return Animal;

  })(Being);

  hi = function() {
  return [document.title, "Hello JavaScript"].join(": ");
};

  heredoc = "CoffeeScript subst test " + (0x8 + 0xf / 0x2 + ("nested string " + /\n/));


  /*
  CoffeeScript Compiler v1.2.0
  Released under the MIT License
   */

  OPERATOR = /^(?:[-=]>)/;

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL2hvbWUvc2Vhbi8uYXRvbS9wYWNrYWdlcy9ncnV2Ym94L3NwZWMvY29mZmVlc2NyaXB0LmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSw2REFBQTtJQUFBOzttU0FBQTs7QUFBQSxFQUFBLEtBQUEsR0FBUSxTQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXdDLFFBQXhDLEdBQUE7O01BQVUsU0FBTyxDQUFJLHNDQUFILEdBQVcsQ0FBWCxHQUFrQixDQUFuQjtLQUN2Qjs7TUFEOEMsV0FBUztBQUFBLFFBQUMsR0FBQSxFQUFLLFdBQU47O0tBQ3ZEO0FBQUEsSUFBQSxJQUFHLE9BQU8sQ0FBQyxhQUFYO2FBQ0UsS0FERjtLQUFBLE1BRUssSUFBRyxPQUFPLENBQUMsU0FBWDtBQUNILE1BQUEsSUFBRyxPQUFPLENBQUMsU0FBWDtlQUEwQixJQUExQjtPQUFBLE1BQUE7ZUFBbUMsS0FBbkM7T0FERztLQUFBLE1BQUE7YUFHSCxJQUhHO0tBSEM7RUFBQSxDQUFSLENBQUE7O0FBQUEsRUFRQSxNQUFBLEdBQVMsU0FBQyxDQUFELEdBQUE7V0FBTyxDQUFBLEdBQUksRUFBWDtFQUFBLENBUlQsQ0FBQTs7QUFBQSxFQVVBLEdBQUEsR0FBTSxTQUFBLEdBQUE7V0FBRyxFQUFIO0VBQUEsQ0FWTixDQUFBOztBQUFBLEVBWUEsSUFBQSxHQUNFO0FBQUEsSUFBQSxJQUFBLEVBQVEsSUFBSSxDQUFDLElBQWI7QUFBQSxJQUNBLE1BQUEsRUFBUSxNQURSO0FBQUEsSUFFQSxJQUFBLEVBQVEsU0FBQyxDQUFELEdBQUE7YUFBTyxDQUFBLEdBQUksTUFBQSxDQUFPLENBQVAsRUFBWDtJQUFBLENBRlI7R0FiRixDQUFBOztBQUFBLEVBaUJBLElBQUEsR0FBTyxTQUFBLEdBQUE7QUFDTCxRQUFBLGVBQUE7QUFBQSxJQURNLHVCQUFRLGlFQUNkLENBQUE7V0FBQSxLQUFBLENBQU0sTUFBTixFQUFjLE9BQWQsRUFESztFQUFBLENBakJQLENBQUE7O0FBQUEsRUFvQk07QUFDSiw2QkFBQSxDQUFBOztBQUFhLElBQUEsZ0JBQUUsSUFBRixHQUFBO0FBQVMsTUFBUixJQUFDLENBQUEsT0FBQSxJQUFPLENBQVQ7SUFBQSxDQUFiOztBQUFBLHFCQUVBLElBQUEsR0FBTSxTQUFDLE1BQUQsR0FBQTthQUNKLEtBQUEsQ0FBTSxJQUFDLENBQUEsSUFBRCxHQUFRLENBQUMsU0FBQSxHQUFTLE1BQVQsR0FBZ0IsSUFBakIsQ0FBZCxFQURJO0lBQUEsQ0FGTixDQUFBOztrQkFBQTs7S0FEbUIsTUFwQnJCLENBQUE7O0FBQUEsRUEwQkEsRUFBQSxHQUFLOztDQTFCTCxDQUFBOztBQUFBLEVBOEJBLE9BQUEsR0FDQSwwQkFBQSxHQUF5QixDQUF4QixHQUFBLEdBQVEsR0FBQSxHQUFNLEdBQWQsR0FBcUIsQ0FBQyxnQkFBQSxHQUF0QixJQUFxQixDQUFHLENBL0J6QixDQUFBOztBQWtDQTtBQUFBOzs7S0FsQ0E7O0FBQUEsRUF1Q0EsUUFBQSxHQUFXLFlBdkNYLENBQUE7QUFBQSIKfQ==

//# sourceURL=/home/sean/.atom/packages/gruvbox/spec/coffeescript.coffee
