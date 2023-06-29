import{n as a,o as r,_ as n,a as s,c}from"./index-154a74fc.js";function l(e){let o="";a(()=>{document.querySelector(e)});const t=d(),i=f();r(()=>{o(),t(),i()})}function d(){const e=document.createElement("script");return e.type="x-shader/x-fragment",e.id="fragmentShaderPosition",e.text=`
    uniform float time;
    uniform float delta;

    void main()	{

        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 tmpPos = texture2D( texturePosition, uv );
        vec3 position = tmpPos.xyz;
        vec3 velocity = texture2D( textureVelocity, uv ).xyz;

        float phase = tmpPos.w;

        phase = mod( ( phase + delta +
            length( velocity.xz ) * delta * 3. +
            max( velocity.y, 0.0 ) * delta * 6. ), 62.83 );

        gl_FragColor = vec4( position + velocity * delta * 15. , phase );
    }
  `,document.body.appendChild(e),()=>{document.body.removeChild(e)}}function f(){const e=document.createElement("script");return e.type="x-shader/x-fragment",e.id="fragmentShaderVelocity",e.text=`
    uniform float time;
    uniform float testing;
    uniform float delta; // about 0.016
    uniform float separationDistance; // 20
    uniform float alignmentDistance; // 40
    uniform float cohesionDistance; //
    uniform float freedomFactor;
    uniform vec3 predator;

    const float width = resolution.x;
    const float height = resolution.y;

    const float PI = 3.141592653589793;
    const float PI_2 = PI * 2.0;
    // const float VISION = PI * 0.55;

    float zoneRadius = 40.0;
    float zoneRadiusSquared = 1600.0;

    float separationThresh = 0.45;
    float alignmentThresh = 0.65;

    const float UPPER_BOUNDS = BOUNDS;
    const float LOWER_BOUNDS = -UPPER_BOUNDS;

    const float SPEED_LIMIT = 9.0;

    float rand( vec2 co ){
        return fract( sin( dot( co.xy, vec2(12.9898,78.233) ) ) * 43758.5453 );
    }

    void main() {

        zoneRadius = separationDistance + alignmentDistance + cohesionDistance;
        separationThresh = separationDistance / zoneRadius;
        alignmentThresh = ( separationDistance + alignmentDistance ) / zoneRadius;
        zoneRadiusSquared = zoneRadius * zoneRadius;


        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec3 birdPosition, birdVelocity;

        vec3 selfPosition = texture2D( texturePosition, uv ).xyz;
        vec3 selfVelocity = texture2D( textureVelocity, uv ).xyz;

        float dist;
        vec3 dir; // direction
        float distSquared;

        float separationSquared = separationDistance * separationDistance;
        float cohesionSquared = cohesionDistance * cohesionDistance;

        float f;
        float percent;

        vec3 velocity = selfVelocity;

        float limit = SPEED_LIMIT;

        dir = predator * UPPER_BOUNDS - selfPosition;
        dir.z = 0.;
        // dir.z *= 0.6;
        dist = length( dir );
        distSquared = dist * dist;

        float preyRadius = 150.0;
        float preyRadiusSq = preyRadius * preyRadius;


        // move birds away from predator
        if ( dist < preyRadius ) {

            f = ( distSquared / preyRadiusSq - 1.0 ) * delta * 100.;
            velocity += normalize( dir ) * f;
            limit += 5.0;
        }


        // if (testing == 0.0) {}
        // if ( rand( uv + time ) < freedomFactor ) {}


        // Attract flocks to the center
        vec3 central = vec3( 0., 0., 0. );
        dir = selfPosition - central;
        dist = length( dir );

        dir.y *= 2.5;
        velocity -= normalize( dir ) * delta * 5.;

        for ( float y = 0.0; y < height; y++ ) {
            for ( float x = 0.0; x < width; x++ ) {

                vec2 ref = vec2( x + 0.5, y + 0.5 ) / resolution.xy;
                birdPosition = texture2D( texturePosition, ref ).xyz;

                dir = birdPosition - selfPosition;
                dist = length( dir );

                if ( dist < 0.0001 ) continue;

                distSquared = dist * dist;

                if ( distSquared > zoneRadiusSquared ) continue;

                percent = distSquared / zoneRadiusSquared;

                if ( percent < separationThresh ) { // low

                    // Separation - Move apart for comfort
                    f = ( separationThresh / percent - 1.0 ) * delta;
                    velocity -= normalize( dir ) * f;

                } else if ( percent < alignmentThresh ) { // high

                    // Alignment - fly the same direction
                    float threshDelta = alignmentThresh - separationThresh;
                    float adjustedPercent = ( percent - separationThresh ) / threshDelta;

                    birdVelocity = texture2D( textureVelocity, ref ).xyz;

                    f = ( 0.5 - cos( adjustedPercent * PI_2 ) * 0.5 + 0.5 ) * delta;
                    velocity += normalize( birdVelocity ) * f;

                } else {

                    // Attraction / Cohesion - move closer
                    float threshDelta = 1.0 - alignmentThresh;
                    float adjustedPercent;
                    if( threshDelta == 0. ) adjustedPercent = 1.;
                    else adjustedPercent = ( percent - alignmentThresh ) / threshDelta;

                    f = ( 0.5 - ( cos( adjustedPercent * PI_2 ) * -0.5 + 0.5 ) ) * delta;

                    velocity += normalize( dir ) * f;

                }

            }

        }

        // this make tends to fly around than down or up
        // if (velocity.y > 0.) velocity.y *= (1. - 0.2 * delta);

        // Speed Limits
        if ( length( velocity ) > limit ) {
            velocity = normalize( velocity ) * limit;
        }

        gl_FragColor = vec4( velocity, 1.0 );

    }
  `,document.body.appendChild(e),()=>{document.body.removeChild(e)}}function u(e=null){if(typeof e!="function")throw new Error("callBack is not a function !");function o(i){e(i.matches?"dark":"light")}const t=window.matchMedia("(prefers-color-scheme: dark)");return o(t),t.addEventListener("change",o),function(){t.removeEventListener("change",o)}}const h={setup(){l("#mainPage");const e=u(o=>{const t=document.querySelector(":root"),i=getComputedStyle(t).getPropertyValue("--color-background");console.log(i)});r(()=>{e()})}},m={class:"page",id:"mainPage"};function p(e,o,t,i,y,v){return s(),c("div",m)}const x=n(h,[["render",p]]);export{x as default};