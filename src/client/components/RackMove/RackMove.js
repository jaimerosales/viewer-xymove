// eslint-disable-next-line
const THREE = window.THREE;

export default class RackMove {

    serverTransform (points) {
   
        var transform = {
            translation: new THREE.Vector3(0.0, 0.0, 0.0),
            rotation: new THREE.Vector3(90.0, 0.0, 0.0),
            scale: new THREE.Vector3(0.003, 0.003, 0.003)
        }
        //console.log(transform);
        if (points.face.normal.x === 0 && points.face.normal.y === 0 ){
            transform.translation = new THREE.Vector3(points.point.x , points.point.y , points.point.z+2.5);
            console.log('Clipped to Floor Z axis');
        }
        else {
            alert('You need to select a point on the Floor');
        }
        return transform;
 
    }

    serverTransformRight (translationValue, rotationValue, modelCode) {
   
        var transform = {
            translation: translationValue,
            rotation: rotationValue,
            scale: new THREE.Vector3(0.003, 0.003, 0.003)
        }
        switch ( modelCode === "1" ) {
            case (transform.rotation.x === 90.0 && transform.rotation.y === 0.0  && transform.rotation.z === 0.0):
                transform.translation = new THREE.Vector3(transform.translation.x , transform.translation.y + 2 , transform.translation.z);
                transform.rotation = new THREE.Vector3(transform.rotation.x , transform.rotation.y, transform.rotation.z);
                break;
            case (transform.rotation.x === 90.0 && transform.rotation.y === 90.0 && transform.rotation.z === 0.0):
                transform.translation = new THREE.Vector3(transform.translation.x - 2  , transform.translation.y , transform.translation.z);
                transform.rotation = new THREE.Vector3(transform.rotation.x , transform.rotation.y, transform.rotation.z);
                break;
            case (transform.rotation.x === 90.0 && transform.rotation.y === 180.0 && transform.rotation.z === 0.0):
                transform.translation = new THREE.Vector3(transform.translation.x , transform.translation.y - 2 , transform.translation.z);
                transform.rotation = new THREE.Vector3(transform.rotation.x , transform.rotation.y, transform.rotation.z);
                break;
            case (transform.rotation.x === 90.0 && transform.rotation.y === 270.0 && transform.rotation.z === 0.0):
                transform.translation = new THREE.Vector3(transform.translation.x + 2  , transform.translation.y , transform.translation.z);
                transform.rotation = new THREE.Vector3(transform.rotation.x , transform.rotation.y, transform.rotation.z);
                break;
            default: 
                console.log('Enter an Angle equal to 0, 90, 180, 270 in the Y Axis');
        }

        return transform;
 
    }

    serverTransformLeft (translationValue, rotationValue, modelCode) {
   
        var transform = {
            translation: translationValue,
            rotation: rotationValue,
            scale: new THREE.Vector3(0.003, 0.003, 0.003)
        }
       
        switch ( modelCode === "2" ) {
            case (transform.rotation.x === 90.0 && transform.rotation.y === 0.0 && transform.rotation.z === 0.0):
                transform.translation = new THREE.Vector3(transform.translation.x , transform.translation.y -2 , transform.translation.z);
                transform.rotation = new THREE.Vector3(transform.rotation.x , transform.rotation.y, transform.rotation.z);
                break;
            case (transform.rotation.x === 90.0 && transform.rotation.y === 90.0 && transform.rotation.z === 0.0):
                transform.translation = new THREE.Vector3(transform.translation.x + 2 , transform.translation.y , transform.translation.z);
                transform.rotation = new THREE.Vector3(transform.rotation.x , transform.rotation.y, transform.rotation.z);
                break;
            case (transform.rotation.x === 90.0 && transform.rotation.y === 180.0 && transform.rotation.z === 0.0):
                transform.translation = new THREE.Vector3(transform.translation.x , transform.translation.y + 2 , transform.translation.z);
                transform.rotation = new THREE.Vector3(transform.rotation.x , transform.rotation.y, transform.rotation.z);
                break;
            case (transform.rotation.x === 90.0 && transform.rotation.y === 270.0 && transform.rotation.z === 0.0):
                transform.translation = new THREE.Vector3(transform.translation.x - 2 , transform.translation.y , transform.translation.z);
                transform.rotation = new THREE.Vector3(transform.rotation.x , transform.rotation.y, transform.rotation.z);
                break;
            default: 
                console.log('Enter an Angle equal to 0, 90, 180, 270 in the Y Axis');
        }

        return transform;
 
    }


}