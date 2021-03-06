var sprite_ani = {
    flip: function (fullWidth, coordinates) {
        return {
            x: fullWidth - coordinates.x - coordinates.w,
            y: coordinates.y,
            w: coordinates.w,
            h: coordinates.h,
            lpd: coordinates.rpd,
            rpd: coordinates.lpd,
            tpd: coordinates.tpd,
            bpd: coordinates.bpd
        };
    },
    pink: {
        stand2: {x: 69,  y: 379, w: 66, h: 92, lpd: 10, rpd: 10, tpd: 17, bpd: 0},
        stand:  {x: 70,  y: 92,  w: 66, h: 92, lpd: 10, rpd: 10, tpd: 17, bpd: 0},
        climb1: {x: 70,  y: 0,   w: 66, h: 92, lpd: 10, rpd: 10, tpd: 17, bpd: 0},
        climb2: {x: 135, y: 379, w: 66, h: 92, lpd: 10, rpd: 10, tpd: 17, bpd: 0},
        duck:   {x: 0,   y: 380, w: 69, h: 71, lpd: 11, rpd: 12, tpd: 17, bpd: 0},
        hurt:   {x: 0,   y: 288, w: 69, h: 92, lpd: 10, rpd: 10, tpd: 17, bpd: 0},
        jump:   {x: 69,  y: 286, w: 67, h: 93, lpd: 10, rpd: 10, tpd: 17, bpd: 0},
        swim1:  {x: 0,   y: 193, w: 69, h: 95, lpd: 10, rpd: 10, tpd: 17, bpd: 0},
        swim2:  {x: 0,   y: 96,  w: 70, h: 97, lpd: 10, rpd: 10, tpd: 17, bpd: 0},
        walk1:  {x: 69,  y: 193, w: 68, h: 93, lpd: 12, rpd: 10, tpd: 17, bpd: 1},
        walk2:  {x: 0,   y: 0,   w: 70, h: 96, lpd: 13, rpd: 11, tpd: 18, bpd: 3},
    },
    items: {
        bomb:                 {x: 432,  y: 432, w: 70,  h: 70},
        bombFlash:            {x: 432,  y: 360, w: 70,  h: 70},
        bush:                 {x: 346,  y: 144, w: 70,  h: 70},
        buttonBlue:           {x: 288,  y: 504, w: 70,  h: 70},
        buttonBlue_pressed:   {x: 419,  y: 72,  w: 70,  h: 70},
        buttonGreen:          {x: 419,  y: 0,   w: 70,  h: 70},
        buttonGreen_pressed:  {x: 418,  y: 144, w: 70,  h: 70},
        buttonRed:            {x: 360,  y: 504, w: 70,  h: 70},
        buttonRed_pressed:    {x: 360,  y: 432, w: 70,  h: 70},
        buttonYellow:         {x: 360,  y: 360, w: 70,  h: 70},
        buttonYellow_pressed: {x: 360,  y: 288, w: 70,  h: 70},
        cactus:               {x: 360,  y: 216, w: 70,  h: 70},
        chain:                {x: 347,  y: 72,  w: 70,  h: 70},
        cloud1:               {x: 0,    y: 146, w: 128, h: 71},
        cloud2:               {x: 0,    y: 73,  w: 129, h: 71},
        cloud3:               {x: 0,    y: 0,   w: 129, h: 71},
        coinBronze:           {x: 305,  y: 450, w: 36,  h: 36},
        coinGold:             {x: 305,  y: 378, w: 36,  h: 36},
        coinSilver:           {x: 305,  y: 306, w: 36,  h: 36},
        fireball:             {x: 0,    y: 435, w: 70,  h: 70},
        flagBlue:             {x: 275,  y: 72,  w: 70,  h: 70},
        flagBlue2:            {x: 275,  y: 0,   w: 70,  h: 70},
        flagBlueHanging:      {x: 216,  y: 504, w: 70,  h: 70},
        flagGreen:            {x: 216,  y: 432, w: 70,  h: 70},
        flagGreen2:           {x: 216,  y: 360, w: 70,  h: 70},
        flagGreenHanging:     {x: 216,  y: 288, w: 70,  h: 70},
        flagRed:              {x: 274,  y: 144, w: 70,  h: 70},
        flagRed2:             {x: 216,  y: 216, w: 70,  h: 70},
        flagRedHanging:       {x: 203,  y: 72,  w: 70,  h: 70},
        flagYellow:           {x: 203,  y: 0,   w: 70,  h: 70},
        flagYellow2:          {x: 202,  y: 144, w: 70,  h: 70},
        flagYellowHanging:    {x: 144,  y: 434, w: 70,  h: 70},
        gemBlue:              {x: 144,  y: 362, w: 70,  h: 70},
        gemGreen:             {x: 144,  y: 290, w: 70,  h: 70},
        gemRed:               {x: 144,  y: 218, w: 70,  h: 70},
        gemYellow:            {x: 131,  y: 72,  w: 70,  h: 70},
        keyBlue:              {x: 131,  y: 0,   w: 70,  h: 70},
        keyGreen:             {x: 130,  y: 146, w: 70,  h: 70},
        keyRed:               {x: 72,   y: 435, w: 70,  h: 70},
        keyYellow:            {x: 72,   y: 363, w: 70,  h: 70},
        mushroomBrown:        {x: 72,   y: 291, w: 70,  h: 70},
        mushroomRed:          {x: 72,   y: 219, w: 70,  h: 70},
        particleBrick1a:      {x: 0,    y: 553, w: 19,  h: 14},
        particleBrick1b:      {x: 0,    y: 530, w: 21,  h: 21},
        particleBrick2a:      {x: 21,   y: 553, w: 19,  h: 14},
        particleBrick2b:      {x: 0,    y: 507, w: 21,  h: 21},
        plant:                {x: 0,    y: 363, w: 70,  h: 70},
        plantPurple:          {x: 0,    y: 291, w: 70,  h: 70},
        rock:                 {x: 0,    y: 219, w: 70,  h: 70},
        snowhill:             {x: 288,  y: 216, w: 70,  h: 70},
        spikes:               {x: 347,  y: 0,   w: 70,  h: 70},
        springboardDown:      {x: 432,  y: 288, w: 70,  h: 70},
        springboardUp:        {x: 432,  y: 216, w: 70,  h: 70},
        star:                 {x: 504,  y: 288, w: 70,  h: 70},
        switchLeft:           {x: 504,  y: 216, w: 70,  h: 70},
        switchMid:            {x: 491,  y: 72,  w: 70,  h: 70},
        switchRight:          {x: 491,  y: 0,   w: 70,  h: 70},
        weight:               {x: 490,  y: 144, w: 70,  h: 70},
        weightChained:        {x: 432,  y: 504, w: 70,  h: 70},
    },
    tiles: {
        box:                  {x: 0,    y: 864, width: 70,  height: 70},
        boxAlt:               {x: 0,    y: 792, width: 70,  height: 70},
        boxCoin:              {x: 0,    y: 720, width: 70,  height: 70},
        boxCoinAlt:           {x: 0,    y: 576, width: 70,  height: 70},
        boxCoinAlt_disabled:  {x: 0,    y: 504, width: 70,  height: 70},
        boxCoin_disabled:     {x: 0,    y: 648, width: 70,  height: 70},
        boxEmpty:             {x: 0,    y: 432, width: 70,  height: 70},
        boxExplosive:         {x: 0,    y: 360, width: 70,  height: 70},
        boxExplosiveAlt:      {x: 0,    y: 216, width: 70,  height: 70},
        boxExplosive_disabled:{x: 0,    y: 288, width: 70,  height: 70},
        boxItem:              {x: 0,    y: 144, width: 70,  height: 70},
        boxItemAlt:           {x: 0,    y: 0,   width: 70,  height: 70},
        boxItemAlt_disabled:  {x: 432,  y: 432, width: 70,  height: 70},
        boxItem_disabled:     {x: 0,    y: 72,  width: 70,  height: 70},
        boxWarning:           {x: 72,   y: 648, width: 70,  height: 70},
        brickWall:            {x: 216,  y: 0,   width: 70,  height: 70},
        bridge:               {x: 216,  y: 72,  width: 70,  height: 70},
        bridgeLogs:           {x: 288,  y: 720, width: 70,  height: 70},
        castle:               {x: 288,  y: 792, width: 70,  height: 70},
        castleCenter:         {x: 504,  y: 288, width: 70,  height: 70},
        castleCenter_rounded: {x: 504,  y: 720, width: 70,  height: 70},
        castleCliffLeft:      {x: 504,  y: 792, width: 70,  height: 70},
        castleCliffLeftAlt:   {x: 648,  y: 720, width: 70,  height: 70},
        castleCliffRight:     {x: 648,  y: 792, width: 70,  height: 70},
        castleCliffRightAlt:  {x: 792,  y: 288, width: 70,  height: 70},
        castleHalf:           {x: 792,  y: 360, width: 70,  height: 70},
        castleHalfLeft:       {x: 432,  y: 720, width: 70,  height: 70},
        castleHalfMid:        {x: 648,  y: 648, width: 70,  height: 70},
        castleHalfRight:      {x: 792,  y: 648, width: 70,  height: 70},
        castleHillLeft:       {x: 648,  y: 576, width: 70,  height: 70},
        castleHillLeft2:      {x: 792,  y: 576, width: 70,  height: 70},
        castleHillRight:      {x: 792,  y: 504, width: 70,  height: 70},
        castleHillRight2:     {x: 792,  y: 432, width: 70,  height: 70},
        castleLedgeLeft:      {x: 856,  y: 868, width: 5,   height: 22},
        castleLedgeRight:     {x: 842,  y: 868, width: 5,   height: 22},
        castleLeft:           {x: 792,  y: 216, width: 70,  height: 70},
        castleMid:            {x: 792,  y: 144, width: 70,  height: 70},
        castleRight:          {x: 792,  y: 72,  width: 70,  height: 70},
        dirt:                 {x: 792,  y: 0,   width: 70,  height: 70},
        dirtCenter:           {x: 720,  y: 864, width: 70,  height: 70},
        dirtCenter_rounded:   {x: 720,  y: 792, width: 70,  height: 70},
        dirtCliffLeft:        {x: 720,  y: 720, width: 70,  height: 70},
        dirtCliffLeftAlt:     {x: 720,  y: 648, width: 70,  height: 70},
        dirtCliffRight:       {x: 720,  y: 576, width: 70,  height: 70},
        dirtCliffRightAlt:    {x: 720,  y: 504, width: 70,  height: 70},
        dirtHalf:             {x: 720,  y: 432, width: 70,  height: 70},
        dirtHalfLeft:         {x: 720,  y: 360, width: 70,  height: 70},
        dirtHalfMid:          {x: 720,  y: 288, width: 70,  height: 70},
        dirtHalfRight:        {x: 720,  y: 216, width: 70,  height: 70},
        dirtHillLeft:         {x: 720,  y: 144, width: 70,  height: 70},
        dirtHillLeft2:        {x: 720,  y: 72,  width: 70,  height: 70},
        dirtHillRight:        {x: 720,  y: 0,   width: 70,  height: 70},
        dirtHillRight2:       {x: 648,  y: 864, width: 70,  height: 70},
        dirtLedgeLeft:        {x: 842,  y: 892, width: 5,   height: 18},
        dirtLedgeRight:       {x: 842,  y: 912, width: 5,   height: 18},
        dirtLeft:             {x: 504,  y: 432, width: 70,  height: 70},
        dirtMid:              {x: 504,  y: 360, width: 70,  height: 70},
        dirtRight:            {x: 648,  y: 504, width: 70,  height: 70},
        door_closedMid:       {x: 648,  y: 432, width: 70,  height: 70},
        door_closedTop:       {x: 648,  y: 360, width: 70,  height: 70},
        door_openMid:         {x: 648,  y: 288, width: 70,  height: 70},
        door_openTop:         {x: 648,  y: 216, width: 70,  height: 70},
        fence:                {x: 648,  y: 144, width: 70,  height: 70},
        fenceBroken:          {x: 648,  y: 72,  width: 70,  height: 70},
        grass:                {x: 648,  y: 0,   width: 70,  height: 70},
        grassCenter:          {x: 576,  y: 864, width: 70,  height: 70},
        grassCenter_rounded:  {x: 576,  y: 792, width: 70,  height: 70},
        grassCliffLeft:       {x: 576,  y: 720, width: 70,  height: 70},
        grassCliffLeftAlt:    {x: 576,  y: 648, width: 70,  height: 70},
        grassCliffRight:      {x: 576,  y: 576, width: 70,  height: 70},
        grassCliffRightAlt:   {x: 576,  y: 504, width: 70,  height: 70},
        grassHalf:            {x: 576,  y: 432, width: 70,  height: 70},
        grassHalfLeft:        {x: 576,  y: 360, width: 70,  height: 70},
        grassHalfMid:         {x: 576,  y: 288, width: 70,  height: 70},
        grassHalfRight:       {x: 576,  y: 216, width: 70,  height: 70},
        grassHillLeft:        {x: 576,  y: 144, width: 70,  height: 70},
        grassHillLeft2:       {x: 576,  y: 72,  width: 70,  height: 70},
        grassHillRight:       {x: 576,  y: 0,   width: 70,  height: 70},
        grassHillRight2:      {x: 504,  y: 864, width: 70,  height: 70},
        grassLedgeLeft:       {x: 849,  y: 868, width: 5,   height: 24},
        grassLedgeRight:      {x: 849,  y: 894, width: 5,   height: 24},
        grassLeft:            {x: 504,  y: 648, width: 70,  height: 70},
        grassMid:             {x: 504,  y: 576, width: 70,  height: 70},
        grassRight:           {x: 504,  y: 504, width: 70,  height: 70},
        hill_large:           {x: 842,  y: 720, width: 48,  height: 146},
        hill_largeAlt:        {x: 864,  y: 0,   width: 48,  height: 146},
        hill_small:           {x: 792,  y: 828, width: 48,  height: 106},
        hill_smallAlt:        {x: 792,  y: 720, width: 48,  height: 106},
        ladder_mid:           {x: 504,  y: 144, width: 70,  height: 70},
        ladder_top:           {x: 504,  y: 72,  width: 70,  height: 70},
        liquidLava:           {x: 504,  y: 0,   width: 70,  height: 70},
        liquidLavaTop:        {x: 432,  y: 864, width: 70,  height: 70},
        liquidLavaTop_mid:    {x: 432,  y: 792, width: 70,  height: 70},
        liquidWater:          {x: 504,  y: 216, width: 70,  height: 70},
        liquidWaterTop:       {x: 432,  y: 648, width: 70,  height: 70},
        liquidWaterTop_mid:   {x: 432,  y: 576, width: 70,  height: 70},
        lock_blue:            {x: 432,  y: 504, width: 70,  height: 70},
        lock_green:           {x: 72,   y: 576, width: 70,  height: 70},
        lock_red:             {x: 432,  y: 360, width: 70,  height: 70},
        lock_yellow:          {x: 432,  y: 288, width: 70,  height: 70},
        rockHillLeft:         {x: 432,  y: 216, width: 70,  height: 70},
        rockHillRight:        {x: 432,  y: 144, width: 70,  height: 70},
        ropeAttached:         {x: 432,  y: 72,  width: 70,  height: 70},
        ropeHorizontal:       {x: 432,  y: 0,   width: 70,  height: 70},
        ropeVertical:         {x: 360,  y: 864, width: 70,  height: 70},
        sand:                 {x: 360,  y: 792, width: 70,  height: 70},
        sandCenter:           {x: 576,  y: 864, width: 70,  height: 70},
        sandCenter_rounded:   {x: 576,  y: 792, width: 70,  height: 70},
        sandCliffLeft:        {x: 360,  y: 720, width: 70,  height: 70},
        sandCliffLeftAlt:     {x: 360,  y: 648, width: 70,  height: 70},
        sandCliffRight:       {x: 360,  y: 576, width: 70,  height: 70},
        sandCliffRightAlt:    {x: 360,  y: 504, width: 70,  height: 70},
        sandHalf:             {x: 360,  y: 432, width: 70,  height: 70},
        sandHalfLeft:         {x: 360,  y: 360, width: 70,  height: 70},
        sandHalfMid:          {x: 360,  y: 288, width: 70,  height: 70},
        sandHalfRight:        {x: 360,  y: 216, width: 70,  height: 70},
        sandHillLeft:         {x: 360,  y: 144, width: 70,  height: 70},
        sandHillLeft2:        {x: 360,  y: 72,  width: 70,  height: 70},
        sandHillRight:        {x: 360,  y: 0,   width: 70,  height: 70},
        sandHillRight2:       {x: 288,  y: 864, width: 70,  height: 70},
        sandLedgeLeft:        {x: 856,  y: 892, width: 5,   height: 18},
        sandLedgeRight:       {x: 856,  y: 912, width: 5,   height: 18},
        sandLeft:             {x: 288,  y: 648, width: 70,  height: 70},
        sandMid:              {x: 288,  y: 576, width: 70,  height: 70},
        sandRight:            {x: 288,  y: 504, width: 70,  height: 70},
        sign:                 {x: 288,  y: 432, width: 70,  height: 70},
        signExit:             {x: 288,  y: 360, width: 70,  height: 70},
        signLeft:             {x: 288,  y: 288, width: 70,  height: 70},
        signRight:            {x: 288,  y: 216, width: 70,  height: 70},
        snow:                 {x: 288,  y: 144, width: 70,  height: 70},
        snowCenter:           {x: 720,  y: 864, width: 70,  height: 70},
        snowCenter_rounded:   {x: 288,  y: 72,  width: 70,  height: 70},
        snowCliffLeft:        {x: 288,  y: 0,   width: 70,  height: 70},
        snowCliffLeftAlt:     {x: 216,  y: 864, width: 70,  height: 70},
        snowCliffRight:       {x: 216,  y: 792, width: 70,  height: 70},
        snowCliffRightAlt:    {x: 216,  y: 720, width: 70,  height: 70},
        snowHalf:             {x: 216,  y: 648, width: 70,  height: 70},
        snowHalfLeft:         {x: 216,  y: 576, width: 70,  height: 70},
        snowHalfMid:          {x: 216,  y: 504, width: 70,  height: 70},
        snowHalfRight:        {x: 216,  y: 432, width: 70,  height: 70},
        snowHillLeft:         {x: 216,  y: 360, width: 70,  height: 70},
        snowHillLeft2:        {x: 216,  y: 288, width: 70,  height: 70},
        snowHillRight:        {x: 216,  y: 216, width: 70,  height: 70},
        snowHillRight2:       {x: 216,  y: 144, width: 70,  height: 70},
        snowLedgeLeft:        {x: 863,  y: 868, width: 5,   height: 18},
        snowLedgeRight:       {x: 863,  y: 888, width: 5,   height: 18},
        snowLeft:             {x: 144,  y: 864, width: 70,  height: 70},
        snowMid:              {x: 144,  y: 792, width: 70,  height: 70},
        snowRight:            {x: 144,  y: 720, width: 70,  height: 70},
        stone:                {x: 144,  y: 648, width: 70,  height: 70},
        stoneCenter:          {x: 144,  y: 576, width: 70,  height: 70},
        stoneCenter_rounded:  {x: 144,  y: 504, width: 70,  height: 70},
        stoneCliffLeft:       {x: 144,  y: 432, width: 70,  height: 70},
        stoneCliffLeftAlt:    {x: 144,  y: 360, width: 70,  height: 70},
        stoneCliffRight:      {x: 144,  y: 288, width: 70,  height: 70},
        stoneCliffRightAlt:   {x: 144,  y: 216, width: 70,  height: 70},
        stoneHalf:            {x: 144,  y: 144, width: 70,  height: 70},
        stoneHalfLeft:        {x: 144,  y: 72,  width: 70,  height: 70},
        stoneHalfMid:         {x: 144,  y: 0,   width: 70,  height: 70},
        stoneHalfRight:       {x: 72,   y: 864, width: 70,  height: 70},
        stoneHillLeft2:       {x: 72,   y: 792, width: 70,  height: 70},
        stoneHillRight2:      {x: 72,   y: 720, width: 70,  height: 70},
        stoneLedgeLeft:       {x: 863,  y: 908, width: 5,   height: 24},
        stoneLedgeRight:      {x: 864,  y: 148, width: 5,   height: 24},
        stoneLeft:            {x: 72,   y: 504, width: 70,  height: 70},
        stoneMid:             {x: 72,   y: 432, width: 70,  height: 70},
        stoneRight:           {x: 72,   y: 360, width: 70,  height: 70},
        stoneWall:            {x: 72,   y: 288, width: 70,  height: 70},
        tochLit:              {x: 72,   y: 216, width: 70,  height: 70},
        tochLit2:             {x: 72,   y: 144, width: 70,  height: 70},
        torch:                {x: 72,   y: 72,  width: 70,  height: 70},
        window:               {x: 72,   y: 0,   width: 70,  height: 70},
    }
}
